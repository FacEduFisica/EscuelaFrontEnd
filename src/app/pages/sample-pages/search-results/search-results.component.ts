import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
    pageTitle: string = 'Search Results';
    pageSubTitle: string = '';

    searchResultsCount:number = 861;
    searchResultTime:number = 0.51;
    searchKeyword: string = 'Lorem Ipsum';
    searchPages: number = 6;
    searchResults: any[]= [
        {
            title: 'Dulla vel metus scelerisque ante sollicitudin commodo purus odio',
            sub: 'Donec congue tempus ligula, varius hendrerit mi hendrerit sit amet. Duis ac quam sit amet leo feugiat iaculis'
        },
        {
            title: 'Finibus consectetur mauris, eget laoreet turpis malesuada eredeu lectus sed enim suscipit euismod',
            sub: 'Aliquam fringilla neque sit amet libero convallis ac consequat nulla iaculis urabitur placerat mi sed massa euismod, a tincidunt enim tinciduntam porttitor lorem ac pharetra semper'
        },
        {
            title: 'Vestibulum cursus eros id ipsum finibus a pretium justo aliquam',
            sub: 'Etiam cursus lorem eget sapien euismod, ac elementum urna tempusonec dapibus'
        },
        {
            title: 'Nunc erat nunc ullamcorper sit amet odio vel accumsan viverra velit aliquam fringilla neque sit amet libero convallis, ac consequat nulla iaculis',
            sub: 'Suspendisse aliquam sapien vitae elit ornare accumsan in dictum eratraesent pulvinar eros'
        },
        {
            title: 'Pellentesque vitae leo vestibulum odio mollis porta blandit eget nunc',
            sub: 'Suspendisse ullamcorper purus efficitur lorem hendrerit, rhoncus dignissim lorem vehicula'
        },
        {
            title: 'Integer pharetra ligula fermentum condimentum',
            sub: 'Vestibulum faucibus lacus vitae neque scelerisque, eu congue neque bibendum'
        },
        {
            title: 'Nulla placerat tortor at quam ullamcorper, ut tincidunt purus lacinia',
            sub: 'In et risus at enim vulputate finibus'
        },
        {
            title: 'Duis vel purus vel tellus',
            sub: 'Vestibulum pulvinar metus vel nunc gravida elementum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Nullam at lacus et odio molestie accumsan eu sit amet est'
        },
        {
            title: 'Suspendisse scelerisque neque vitae dapibus facilisis',
            sub: 'Integer consequat nisl vel velit euismod, ultricies tempus magna tempus'
        },
        {
            title: 'Aliquam lobortis ex nec efficitur luctus Quisque ullamcorper tortor ut lorem blandit, vitae mollis sem ornare',
            sub: 'Sed ultrices erat vel eros finibus'
        },
        {
            title: 'Nam nec ante mattis',
            sub: 'Donec molestie lorem at lacus pretium, quis interdum ligula fringilla'
        },
        {
            title: 'Praesent auctor orci et ornare ultricies',
            sub: 'Fusce porttitor libero fermentum sapien interdum, eu scelerisque purus sagittis. Fusce porttitor libero fermentum sapien interdum, eu scelerisque purus sagittis'
        },
        {
            title: 'Etiam in sapien quis magna consequat mollis',
            sub: 'Vestibulum eu enim rhoncus, bibendum neque non, commodo lorem Donec varius ipsum quis fermentum malesuada. Ut gravida nulla non est accumsan, ut ultrices turpis pellentesqu'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
