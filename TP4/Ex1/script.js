var tabs = document.getElementsByClassName("tab")
var visionText = `As stated above, a vision statement is a very important part of an organization because it aligns with its mission, core values, and culture. It also guides the strategic plan, because it sets future goals. Similar to a mission statement, a vision statement it’s a living document that is referred to as a lodestar to lead a company to its next innovation.There are also different types of vision statements, as companies have unique core values. For example, a motivational vision statement will both motivate existing employees and also drive talent to the company. They’ll want to work at a place with a business vision that aligns with their personal values. A strong vision statement also works to help differentiate your company from others. `
var historyText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni est officiis minus ducimus ut, quisquam consequatur. Porro tempora sed nostrum, iure velit et quisquam similique ipsa eligendi maxime saepe animi autem dolores, iusto, earum veniam veritatis aliquid odit blanditiis. Molestiae corporis esse dolorem voluptatibus sunt assumenda porro quis beatae eum quasi ipsam suscipit, magni ducimus! Iste ea qui omnis dolores atque porro at, architecto dolore, earum magni doloribus rerum reprehenderit voluptatibus ipsa animi impedit ipsum illo veritatis eveniet neque deserunt!`
var goalsText = `My other goal in life was to have happy times with my friends and family. I wanted to be able to spend quality time with them and enjoy their company. I knew that money and material possessions cannot buy happiness, but good relationships can.

I made it a point to spend time with my loved ones whenever possible. I would go out for dinner, movies, and vacations with them. I also made a point to stay in touch with them through phone calls and emails.
`

function tabPressed(id) {
    console.log("clicked: " + id);

    for (let index = 0; index < tabs.length; index++) {
        tabs[index].style.backgroundColor = "transparent"
    }
    
    var tab = document.getElementById(id);
    tab.style.backgroundColor = "white"

    if(id == "History"){
        tab.style.borderRadius = "10px 0 0 0"
    }else if(id == "Goals"){
        tab.style.borderRadius = "0 10px 0 0"
    }

    var title = document.getElementById("text-title")
    title.innerHTML = id

    var para = document.getElementById("pagraph")
    if (id == "History"){
        para.innerHTML = historyText
    }else if(id == "Vision"){
        para.innerHTML = visionText
        para.innerHTML += `
        <div class="textListItem" >
                <ul>list item</ul>
                <ul>list item</ul>
                <ul>list item</ul>
            </div> `
    }else if(id == "Goals"){
        para.innerHTML = goalsText
    }


}

