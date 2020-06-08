import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
    OnDestroy
} from '@angular/core';
import { Product } from './../../../core/models/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

    @Input() product: Product;
    @Output() clickedProduct: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor() {
        console.log('constructor');
    }

    ngOnInit() {
        console.log('ngOnInit');
    }

    ngDoCheck() {
        console.log('ngDoCheck');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy');
    }

    addCart() {
        console.log('asdf');
        this.clickedProduct.emit(this.product.id);
    }
}
