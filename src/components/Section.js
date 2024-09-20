export default function Section({img, text, weather, spd}){
    return(
        <>
        <section className="App-header">
        <img className="img" src={img} alt="logo" />
        <h1>{text}</h1>
        <p>
          Погода: {weather}°C
        </p>
        <p>
        скорость ветра в 10м: {spd} км/ч
        </p>
      </section>
        </>
    )
}