import OBJ_CONTACT from '@salesforce/schema/Contact';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import MOBILEPHONE_FIELD from '@salesforce/schema/Contact.MobilePhone';
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
// Buraya import edip aşağıda göstermeye refencial integraty yöntemi deniyor
// costant değişmeyecek ifade demek. Değişmeyecek ifadeleri büyük harfle yazıp developera bilgi vermiş oluyoruz
//! 05.08.2023
export default class RecordFormContact extends LightningElement {
    objectApiName=OBJ_CONTACT;
    recordId="003Hu00003PYsONIA1";
    fields=[FIRSTNAME_FIELD,
        LASTNAME_FIELD,
        EMAIL_FIELD,
        MOBILEPHONE_FIELD];

        changeHandler(){//burası function. apexteki metotlara denk gelir
            const evt=new ShowToastEvent({
                title:'Contact status',//bu bir objedir
                message:'İşleminiz başarılı bir şekilde gerçekleşti.',
                variant:'success'
            });
            this.dispatchEvent(evt);
        }

}