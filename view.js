function updateView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
  <h1>Budsjettplanlegger</h1>
    <p></p>
    <p></p>
    <p></p>
    <div></div>

    <input>
    <input>
    
    <select>
        <option value="inntekt">Inntekt</option>
        <option value="utgift">Utgift</option>
    </select>
    <button onclick="leggTilPost()">Legg til</button>
`;
}
