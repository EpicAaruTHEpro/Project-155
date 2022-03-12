AFRAME.registerComponent("game-play", {
    schema : {
        elementId: {type: "string", default: "#coin1"}
    },
    update: function (){
        this.isCollided(this.data.elementId)
    },
    tick: function (){      
        
    },
    isCollided: function (elementId) {
        const element = document.querySelector(elementId)
        element.addEventListener("collide", e => {
            if (elementId.includes("#coin")) {
                console.log(elementId + "collided")
            }

            else if (elementId.includes("#fish")) {
                console.log(elementId + "collided")
            }
        })
    }
    
})