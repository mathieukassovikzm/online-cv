import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'availableTitle',
    standalone: true,
})
export class AvailableTitlePipe implements PipeTransform {
    transform(isAvailable: boolean): string {
        if (isAvailable) {
            return "Disponible pour de nouvelles opportunités";
        }
        return "Actuellement en mission";
    }
}