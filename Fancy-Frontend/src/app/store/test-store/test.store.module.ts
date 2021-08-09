import { NgModule } from "@angular/core";
import { EffectsModule } from '@ngrx/effects'; 
import { StoreModule } from "@ngrx/store";
import { Testreducer } from "./test.store.reducers";


@NgModule({
    exports: [EffectsModule, StoreModule]
    
    imports: [
        StoreModule.forFeature(TestStoreService.storeName, Testreducer)
    ], 
    
    providers: [TestStoreService],
})

export class TestStoreModule {}