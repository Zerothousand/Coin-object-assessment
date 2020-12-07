console.log("lets a go")

let coin = {
    state: 0,
    flip: function () {
        this.state = Math.round(Math.random())
        // console.log(this.state)
        return this.state
    },
    toString: function () {
        coin.flip()
        let face = ""
        if (coin.state === 0) {
            face = "Heads "
        } else if (coin.state === 1){
            face = "Tails " 
        }
        return face
    },
    toHTML: function () {
        face = coin.toString()
        let image = document.createElement('img');
        let coinSides = {
            heads: "https://upload.wikimedia.org/wikipedia/commons/d/db/2009_1_oz_Cook_Islands_Platinum-01.png",
            tails: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Australian_Emu_1_AUD_Reverse_1.png"
        }
        if (face === "Heads ") {
            image.src = coinSides.heads
        } else if (face === "Tails ") {
            image.src = coinSides.tails
        }
        // console.log(coin.flip())
        return image;
    }
};

function display20Flips() {

    for (let i = 0; i < 20; i++) {
        document.body.append(coin.toString())
      
    }

}

display20Flips()
function display20Images() {
    for (let i = 0; i < 20; i++){
        document.body.append(coin.toHTML())
    }
}

display20Images()
// coin.toHTML(coin.flip())
