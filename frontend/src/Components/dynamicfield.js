
import React from 'react'

const DynamicField = () => {

    return (
        <form>
        <div class="d-flex1">
            <h2 className='formtitle'>Whatcha Cooking With?</h2>

            <input type="text" id="form12" className="form-control d-flex1" />
            <span onclick="addField(this)" className="btningredient1 px-3">+</span>
            <span onclick="removeField(this)" className="btningredient2 px-3">−</span>

            <h2 className='formtitle'>Dish Type (optional)</h2>
            <input className="dish1" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="dish1" for="inlineCheckbox1">Starter</label>

            <input className="dish1" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="dish1" for="inlineCheckbox2">Main Course</label>


            <input className="dish1" type="checkbox" id="inlineCheckbox3" value="option3" />
            <label className="dish1" for="inlineCheckbox3">Side Dish </label>
            <input className="dish1" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="dish1" for="inlineCheckbox1">Drinks</label>

            <input className="dish1" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="dish1" for="inlineCheckbox2">Desserts</label>

            <h2 className='formtitle'>Diet Labels (optional)</h2>
            <input className="diet1" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="diet1" for="inlineCheckbox1">Balanced</label>

            <input className="diet1" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="diet1" for="inlineCheckbox2">High Fiber</label>


            <input className="diet1" type="checkbox" id="inlineCheckbox3" value="option3" />
            <label className="diet1" for="inlineCheckbox3">High Protein</label>
            <input className="diet1" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="diet1" for="inlineCheckbox1">Low Carb</label>

            <input className="diet1" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="diet1" for="inlineCheckbox2">Low Fat</label>
            <input className="diet1" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="diet1" for="inlineCheckbox2">Low Sodium</label>

            <h2 className='formtitle'>Allergies/Restrictions (optional)</h2>
            <input className="allergy1" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="allergy1" for="inlineCheckbox1">Alcohol-Cocktail</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="allergy1" for="inlineCheckbox2">Kidney-Friendly</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox3" value="option3" />
            <label className="allergy1" for="inlineCheckbox3">Pork Free</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="allergy1" for="inlineCheckbox1">Alcohol-Free</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="allergy1" for="inlineCheckbox2">Kosher</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox3" value="option3" />
            <label className="allergy1" for="inlineCheckbox3">Red-Meat-Free</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="allergy1" for="inlineCheckbox1">Celery-Free</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="allergy1" for="inlineCheckbox2">Low-Potassium</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox3" value="option3" />
            <label className="allergy1" for="inlineCheckbox3">Sesame-Free</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="allergy1" for="inlineCheckbox1">Crustacean-Free</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="allergy1" for="inlineCheckbox2">Low-Sugar</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox3" value="option3" />
            <label className="allergy1" for="inlineCheckbox3">Shellfish-Free</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="allergy1" for="inlineCheckbox1">Dairy-Free</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="allergy1" for="inlineCheckbox2">Lupine-Free</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox3" value="option3" />
            <label className="allergy1" for="inlineCheckbox3">Soy-Free</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox3" value="option3" />
            <label className="allergy1" for="inlineCheckbox3">DASH</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="allergy1" for="inlineCheckbox1">Mediterranean</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="allergy1" for="inlineCheckbox2">Low-Potassium</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox3" value="option3" />
            <label className="allergy1" for="inlineCheckbox3">Sugar-Conscious</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="allergy1" for="inlineCheckbox1">Egg-Free</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="allergy1" for="inlineCheckbox2">Mollusk-Free</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox3" value="option3" />
            <label className="allergy1" for="inlineCheckbox3">Sugar-Free</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="allergy1" for="inlineCheckbox1">Fish-Free</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="allergy1" for="inlineCheckbox2">Mustard-Free</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox3" value="option3" />
            <label className="allergy1" for="inlineCheckbox3">Sulfite-Free</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox3" value="option3" />
            <label className="allergy1" for="inlineCheckbox3">FODMAP-Free</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="allergy1" for="inlineCheckbox1">No Oil Added</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="allergy1" for="inlineCheckbox2">Tree-Nut-Free</label>


            <input className="allergy1" type="checkbox" id="inlineCheckbox3" value="option3" />
            <label className="allergy1" for="inlineCheckbox3">Gluten-Free</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="allergy1" for="inlineCheckbox1">Paleo</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="allergy1" for="inlineCheckbox2">Vegan</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox3" value="option3" />
            <label className="allergy1" for="inlineCheckbox3">Immuno-Supportive</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="allergy1" for="inlineCheckbox1">Peanut-Free</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="allergy1" for="inlineCheckbox2">Vegetarian</label>


            <input className="allergy1" type="checkbox" id="inlineCheckbox3" value="option3" />
            <label className="allergy1" for="inlineCheckbox3">Keto-Friendly</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="allergy1" for="inlineCheckbox1">Pescatarian</label>

            <input className="allergy1" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="allergy1" for="inlineCheckbox2">Wheat-Free</label>

        </div>
                    <button type="button" class="btnsubmit d-flex1" data-mdb-ripple-color="dark">Submit</button>
                    </form>
    )
}
// let form = document.forms[0];
// let ingredientsWrapper = document.getElementById("ingredientsWrapper");

// function addField(element){
//     if (element.previousElementSibling.value.trim() === "") {
//         return false;
//     }

//     let div = document.createElement("div");
//     div.setAttribute("class", "px-5 field mb-3");

//     let input = document.createElement("input");
//     input.setAttribute("type", "text");
//     input.setAttribute("class", "border-0 me-2 form-control form-control-sm");
//     input.setAttribute("name", "ingredients");
//     input.setAttribute("id", "ingredients")
//     input.setAttribute("placeholder", "Enter query or ingredient");

//     let plus = document.createElement("span");
//     plus.setAttribute("onclick", "addField(this)");
//     plus.setAttribute("class", " btn px-3 btn-primary");
//     let plusText = document.createTextNode("+");
//     plus.appendChild(plusText);

//     let minus = document.createElement("span");
//     minus.setAttribute("onclick", "removeField(this)");
//     minus.setAttribute("class", " btn px-3 btn-primary");
//     let minusText = document.createTextNode("−");
//     minus.appendChild(minusText);

//     ingredientsWrapper.insertBefore(div, ingredientsWrapper.lastChild);
//     div.appendChild(input).focus();
//     div.appendChild(plus);
//     div.appendChild(minus);

//     element.nextElementSibling.style.display = "block";

//     element.style.display = "none";
// }

// // Remove
// function removeField(element){
//     element.parentElement.remove();
// }
export default DynamicField