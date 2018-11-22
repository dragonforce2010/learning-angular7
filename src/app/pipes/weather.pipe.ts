import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weather'
})
export class WeatherPipe implements PipeTransform {
  public weather = ["☀️", "🌈", "⛅"]
  transform(value: string, args?: any): any {
    // switch(value) {
    //   case "sunny":
    //     return "☀️"
    //   case "cloud":
    //     return "☁️"
    //   case "rainbow":
    //     return "🌈"
    //   default:
    //     return "⛅"
    // }
    let randomIndex = Math.floor(Math.random() * this.weather.length)
    return this.weather[randomIndex]
  }

}
