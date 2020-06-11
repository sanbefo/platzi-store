import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
    OnDestroy
} from '@angular/core';
import { Product } from './../../../core/models/product.model';
import { CartService } from './../../../core/services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

    @Input() product: Product;
    @Output() clickedProduct: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(
        private cartService: CartService,
    ) {
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
        this.cartService.addCart(this.product);
        this.clickedProduct.emit(this.product.id);
    }
}
