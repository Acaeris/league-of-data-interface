import {
    Component,
    OnInit,
    OnChanges,
    ViewChild,
    ElementRef,
    Input,
    ViewEncapsulation
} from '@angular/core';
import * as d3 from 'd3';

@Component({
    moduleId: module.id,
    selector: 'ui-rankchart',
    templateUrl: 'rank-chart.component.html',
    styleUrls: ['rank-chart.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class RankChartComponent implements OnInit, OnChanges {
    @ViewChild('rankChart') private chartContainer: ElementRef;
    @Input() private data: Array<any>;
    private margin: any = { top: 20, bottom: 20, left: 20, right: 0 };
    private chart: any;
    private width: number;
    private height: number;
    private xScale: any;
    private yScale: any;
    private colors: any;
    private xAxis: any;
    private yAxis: any;

    constructor() { }

    ngOnInit() {
        this.createChart();
        if (this.data) {
            this.updateChart();
        }
    }

    ngOnChanges() {
        if (this.chart) {
            this.updateChart();
        }
    }

    createChart() {
        // Get width and height
        let element = this.chartContainer.nativeElement;
        this.width = element.offsetWidth - this.margin.left - this.margin.right;
        this.height = element.offsetHeight - this.margin.top - this.margin.bottom;

        // Create chart canvas
        let svg = d3.select(element).append('svg')
            .attr('width', element.offsetWidth)
            .attr('height', element.offsetHeight);

        // Chart plot area
        this.chart = svg.append('g')
            .attr('class', 'lines')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

        // Define x & y domains
        let xDomain = this.data.map(d => d[0]);
        let yDomain = [0, d3.max(this.data, d => d[1])];

        // Create scales
        this.xScale = d3.scaleBand().rangeRound([0, this.width]).domain(xDomain);
        this.yScale = d3.scaleLinear().rangeRound([this.height, 0]).domain(yDomain);

        // x & y axis
        this.xAxis = this.chart.append('g')
            .attr('class', 'axis axis-x')
            .attr('transform', `translate(0, ${this.height})`)
            .call(d3.axisBottom(this.xScale));
        this.yAxis = this.chart.append('g')
            .attr('class', 'axis axis-y')
            .attr('transform', `translate(0, 0)`)
            .call(d3.axisLeft(this.yScale));

        // Line
        this.chart.append("path")
            .datum(this.data)
            .attr('class', 'line')
            .attr('fill', "none")
            .attr('stroke', '#fc0')
            .attr('stroke-linejoin', "round")
            .attr('stroke-linecap', "round")
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .curve(d3.curveBasis)
                .x(d => this.xScale(d[0]))
                .y(d => this.yScale(d[1])));
    }

    updateChart() {
        // Update scales & axis
        this.xScale.domain(this.data.map(d => d[0]));
        this.yScale.domain([0, d3.max(this.data, d => d[1])]);
        this.xAxis.transition().call(d3.axisBottom(this.xScale));
        this.yAxis.transition().call(d3.axisLeft(this.yScale));

        this.chart.selectAll('.line')
            .datum(this.data)
            .transition()
            .attr('d', d3.line()
                .curve(d3.curveBasis)
                .x(d => this.xScale(d[0]))
                .y(d => this.yScale(d[1])));
    }
}
