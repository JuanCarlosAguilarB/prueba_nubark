export class PaginationHelper {
    constructor (elemtents,totalItemsPage){
        this.elemtents = elemtents;
        this.totalItemsPage = totalItemsPage;
        
    }

    pageCount() {
        return     Math.ceil(this.elemtents.length/this.totalItemsPage);
    }

    itemCount(){
        return this.elemtents.length;
    }

    pageItemCount(page){
        let rest = this.elemtents.length%this.totalItemsPage;
        let limit = this.elemtents.length-rest;
        let division = (limit)/this.totalItemsPage;
        let totalPerPage =[];
        if (division===0){
            totalPerPage=[rest];
        }
        else{
            for(let i=this.totalItemsPage; i<=limit; i=i+this.totalItemsPage){
                totalPerPage.push(i);
            }
            totalPerPage.push(rest)
        }
        if(page<=totalPerPage.length-1){
            return totalPerPage[page];
        }
        else{
            return -1;
        }
    }

    //pageIndex(index){}

}
