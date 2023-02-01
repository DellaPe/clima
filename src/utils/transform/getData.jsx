import convertUnit from 'convert-units'
import moment from 'moment'

const getData = (data) => {
  const daysAhead = [0, 1, 2, 3, 4, 5] // Dias para adelantes
  const days = daysAhead.map((d) => moment().add(d, 'd'))
  const dataAux = days.map((d) => {
    // Recorro todo con el map la lista de forecast
    const tempObjArray = data.list.filter((item) => {
      // Me fijo con moment que dia
      const dayOfYear = moment.unix(item.dt).dayOfYear()
      return dayOfYear === d.dayOfYear()
    })
    const temps = tempObjArray.map((item) => item.main.temp)
    return {
      dayHour: d.format('ddd'), // Formatea el dia en 3 caracteres
      min: Number(
        convertUnit(Math.min(...temps))
          .from('K')
          .to('C')
          .toFixed(0)
      ), // Destructuring
      max: Number(
        convertUnit(Math.max(...temps))
          .from('K')
          .to('C')
          .toFixed(0)
      ),
      hasTemps: (temps.length > 0)
    }
  }).filter(items => items.hasTemps)

  const interval = [4, 8, 12, 16, 20, 24]
  const forecastItemListAux = data.list
    .filter((item, index) => interval.includes(index))
    .map((item) => {
      return {
        hour: moment.unix(item.dt).hour(),
        weekDay: moment.unix(item.dt).format('dddd'),
        state: item.weather[0].main,
        temperature: Number(
          convertUnit(item.main.temp).from('K').to('C').toFixed(0)
        )

      }
    })
  return { dataAux, forecastItemListAux }
}

export default getData
