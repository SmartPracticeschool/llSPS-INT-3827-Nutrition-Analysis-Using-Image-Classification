let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let vi=document.getElementById("new").value
  let APP_ID = "dd7222c7"
  let API_KEY = "4290a8b97248030e431e1db55fcf5401"
  let response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${API_KEY}&ingr=1%20large%20${vi}`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
  document.querySelector("#content").innerHTML = `
  
  <center>

<section class="performance-facts">
  <header class="performance-facts__header">
    <h1 class="performance-facts__title">Nutrition Facts of ${data.ingredients[0].text}</h1>
    <p>Serving Size 1 (about 82g)
      
  </header>
  <table class="performance-facts__table">
    <thead>
      <tr>
        <th colspan="3" class="small-info">
          Amount Per Serving
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th colspan="2">
          <b>Calories</b>  ${data.calories}
        </th>
        <td>
          Calories from Fat
          ${data.totalNutrients.CA.quantity.toFixed(4)}
        </td>
      </tr>
      <tr class="thick-row">
        <td colspan="3" class="small-info">
          <b>% Daily Value*</b>
        </td>
      </tr>
      <tr>
        <th colspan="2">
          <b>Total Fat</b>
		       ${data.totalNutrients.FAT.quantity.toFixed(4)}
        </th>
        <td>
          <b>${data.totalDaily.FAT.quantity.toFixed(4)}%</b>
        </td>
      </tr>
      <tr>
        <td class="blank-cell">
        </td>
        <th>
          Saturated Fat
          ${data.totalNutrients.FASAT.quantity}g
        </th>
        <td>
          <b>${data.totalDaily.FAT.quantity.toFixed(4)}%</b>
        </td>
      </tr>
      <tr>
        <td class="blank-cell">
        </td>
        <th>
          Trans Fat
          ${data.totalNutrients.FAT.quantity}g
        </th>
        <td>
        </td>
      </tr>
      <tr>
        <th colspan="2">
          <b>Cholesterol</b>
		  ${data.totalNutrients.CHOLE.quantity.toFixed(4)}mg
        </th>
        <td>
          <b>18%</b>
        </td>
      </tr>
      <tr>
        <th colspan="2">
          <b>Sodium</b>
		  ${data.totalNutrients.NA.quantity.toFixed(4)}mg
        </th>
        <td>
          <b>${data.totalDaily.NA.quantity.toFixed(4)}%</b>
        </td>
      </tr>
      <tr>
        <th colspan="2">
          <b>Total Carbohydrate</b>
          ${data.totalNutrients.CHOCDF.quantity.toFixed(4)}g
        </th>
        <td>
          <b>6%</b>
        </td>
      </tr>
      <tr>
        <td class="blank-cell">
        </td>
        <th>
          Dietary Fiber
          ${data.totalNutrients.FIBTG.quantity.toFixed(4)}g
        </th>
        <td>
          <b>${data.totalDaily.FIBTG.quantity.toFixed(4)}%</b>
        </td>
      </tr>
      <tr>
        <td class="blank-cell">
        </td>
        <th>
          Sugars
          ${data.totalNutrients.SUGAR.quantity.toFixed(4)}g
        </th>
        <td>
        </td>
      </tr>
      <tr class="thick-end">
        <th colspan="2">
          <b>Protein</b>
          ${data.totalNutrients.PROCNT.quantity.toFixed(4)}g
        </th>
        <td>
        </td>
      </tr>
    </tbody>
  </table>

  <table class="performance-facts__table--grid">
    <tbody>
      <tr>
        <td colspan="2">
          Vitamin A
          ${data.totalDaily.VITA_RAE.quantity.toFixed(4)}%
        </td>
        <td>
          Vitamin C
          ${data.totalDaily.VITC.quantity.toFixed(4)}%
        </td>
      </tr>
      <tr class="thin-end">
        <td colspan="2">
          Calcium
          ${data.totalDaily.CA.quantity.toFixed(4)}%
        </td>
        <td>
          Iron
          ${data.totalDaily.FE.quantity.toFixed(4)}%
        </td>
      </tr>
    </tbody>
  </table>

  <p class="small-info">* Percent Daily Values are based on a 2,000 calorie diet.</p>

  <table class="performance-facts__table--small small-info">
    <thead>
      <tr>
        <td colspan="2"></td>
        <th>Calories:</th>
        <th>${data.totalNutrientsKCal.CHOCDF_KCAL.quantity}</th>
        <th>${data.totalNutrientsKCal.ENERC_KCAL.quantity}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th colspan="2">Total Fat</th>
        <td>Less than</td>
<td>${data.totalNutrients.FAT.quantity.toFixed(4)}g</td>
        <td>${data.totalNutrients.CHOCDF.quantity.toFixed(4)}g</td>
      </tr>
      <tr>
        <td class="blank-cell"></td>
        <th>Saturated Fat</th>
        <td>Less than</td>
        <td>${data.totalNutrients.FASAT.quantity.toFixed(4)}g</td>
<td>${data.totalNutrients.FAT.quantity.toFixed(4)}g</td>
      </tr>
      <tr>
        <th colspan="2">Cholesterol</th>
        <td>Less than</td>
        <td>${data.totalNutrients.CHOLE.quantity.toFixed(4)}mg</td>
<td>${data.totalDaily.CHOLE.quantity.toFixed(4)}%</td>
      </tr>
      <tr>
        <th colspan="2">Sodium</th>
        <td>Less than</td>
        <td>${data.totalNutrients.NA.quantity.toFixed(4)}mg</td>
<td>${data.totalDaily.NA.quantity.toFixed(4)}%</td>
      </tr>
      
      <tr>
        <td class="blank-cell"></td>
        <th colspan="2">Dietary Fiber</th>
        <td>${data.totalNutrients.FIBTG.quantity.toFixed(4)}g</td>
        <td>${data.totalDaily.FIBTG.quantity.toFixed(4)}%</td>
      </tr>
    </tbody>
  </table>

  <p class="small-info">
    Calories per gram:
  </p>
  <p class="small-info text-center">
    Fat ${data.totalNutrientsKCal.FAT_KCAL.quantity.toFixed(4)}
    &bull;
    Carbohydrate ${data.totalNutrientsKCal.ENERC_KCAL.quantity.toFixed(4)}
    &bull;
    Protein ${data.totalNutrientsKCal.PROCNT_KCAL.quantity.toFixed(4)}
  </p>

</section>
</center>
`
}

