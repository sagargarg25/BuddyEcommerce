import{Pipe,PipeTransform} from "@angular/core";
// user pipe to convert - to spaces
@Pipe(
    {
        name:'convertToSpacs'
    }

)

export class ConvertToSpacesPipe implements PipeTransform
{
    transform(value:string,character:string):string
    {
            return value.replace(character,' ');
    }


}