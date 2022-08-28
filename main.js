//first container
const firstContainer = document.createElement("div");
firstContainer.setAttribute ("id","first-container");
firstContainer.className ="container";
document.body.appendChild(firstContainer)
//second container
const secondContainer = document.createElement("div");
secondContainer.setAttribute ("id","second-container");
secondContainer.className ="container";
document.body.appendChild(secondContainer)

// Heading 1 (Clothin for Men and Women)
const heading = document.createElement("h2");
heading.className = "heading";
heading.setAttribute("id", "heading1")
document.body.prepend(heading)
heading.innerText = "Clothing for Men and Women"

// Heading 2 (Accessories for Men and Women)
const heading2 = document.createElement("h2");
heading2.className = "heading2";
heading2.setAttribute("id", "heading2")
heading2.innerText = "Accessories for Men and Women"
var temp = document.getElementById('first-container');
var parentNode = document.body;
// Append Element after #first-container
temp.parentNode.insertBefore(heading2, temp.nextSibling);

// for-loop
productList.forEach(element => {

    if (element.isAccessory === false) {
        //created card
        const ele1 = document.createElement("div");
        ele1.className = "card";
        ele1.setAttribute("id", "card-" + element.id)
        document.getElementById("first-container").appendChild(ele1);//---------------append

        //Created Image scection
        const div1 = document.getElementById("card-" + element.id)
        const PreviewImg = document.createElement("img");
        PreviewImg.className = "previewimage";
        PreviewImg.setAttribute("id", "previewimage-" + element.id)
        PreviewImg.setAttribute("src", element.preview)
        div1.appendChild(PreviewImg)//------------------------------------------------append

        //created card data (Title)
        const title = document.createElement("h3");
        title.className = "title";
        title.setAttribute("id", "title-" + element.id)
        div1.appendChild(title)//-----------------------------------------------------append
        title.innerHTML = element.name;

        //created card data (Brand name)
        const brand = document.createElement("h4");
        brand.className = "brand";
        brand.setAttribute("id", "brand-" + element.id)
        div1.appendChild(brand)//-----------------------------------------------------append
        brand.innerHTML = element.brand;

        //created card data (Brand name)
        const price = document.createElement("h5");
        price.className = "price";
        price.setAttribute("id", "price-" + element.id)
        div1.appendChild(price)//-----------------------------------------------------append
        price.innerHTML = "Rs. " + element.price;
    }
    else {
        //created card
        const ele1 = document.createElement("div");
        ele1.className = "card";
        ele1.setAttribute("id", "card-" + element.id)
        document.getElementById("second-container").appendChild(ele1);//---------------append

        //Created Image scection
        const div1 = document.getElementById("card-" + element.id)
        const PreviewImg = document.createElement("img");
        PreviewImg.className = "previewimage";
        PreviewImg.setAttribute("id", "previewimage-" + element.id)
        PreviewImg.setAttribute("src", element.preview)
        div1.appendChild(PreviewImg)//------------------------------------------------append

        //created card data (Title)
        const title = document.createElement("h3");
        title.className = "title";
        title.setAttribute("id", "title-" + element.id)
        div1.appendChild(title)//-----------------------------------------------------append
        title.innerHTML = element.name;

        //created card data (Brand name)
        const brand = document.createElement("h4");
        brand.className = "brand";
        brand.setAttribute("id", "brand-" + element.id)
        div1.appendChild(brand)//-----------------------------------------------------append
        brand.innerHTML = element.brand;

        //created card data (Brand name)
        const price = document.createElement("h5");
        price.className = "price";
        price.setAttribute("id", "price-" + element.id)
        div1.appendChild(price)//-----------------------------------------------------append
        price.innerHTML = "Rs. " + element.price;
    }

});
