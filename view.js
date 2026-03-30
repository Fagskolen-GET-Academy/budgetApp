function updateView() {
  document.getElementById('app').innerHTML = /*HTML*/`
  <h1>Budsjettplanlegger</h1>
    <p id="inntektSum"></p>
    <p id="utgiftSum"></p>
    <p id="saldo"></p>
    <div id="liste"></div>

    <input id="tekst" placeholder="Beskrivelse">
    <input id="belop" placeholder="Beløp">

    <select id="type">
        <option value="inntekt">Inntekt</option>
        <option value="utgift">Utgift</option>
    </select>
    <button onclick="leggTilPost()">Legg til</button>
`;
}
