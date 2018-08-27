import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excludeSelectedValue'
})
export class ExcludeSelectedValuePipe implements PipeTransform {

  transform(fullArray: any, allSelected:any, currentSelection: any): any {
    let newOptionsList = [];
    for(let i = 0; i < fullArray.length; i++){
      let addToArray=true;
      for(let j=0;j<allSelected.length;j++){
        if(allSelected[j].mainKeyChosen===fullArray[i].mainKey){
            addToArray=false;
        }
      }
      if(addToArray || fullArray[i].mainKey === currentSelection){
        newOptionsList.push(fullArray[i]);
      }
    }
    return newOptionsList;
  }

}
