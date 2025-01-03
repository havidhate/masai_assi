let sentenceBuilder = {

    subject: "I",
    
    verb: "am",
    
    object: "coding",
    
    buildSentence: function() {
        console.log(this.subject+" "+this.verb+" "+this.object);
    },
    
    updateProperty: function(property, value) {
        if (this.hasOwnProperty(property)) {
            this[property] = value;
        } else {
            console.error(`Property "${property}" does not exist on sentenceBuilder.`);
        }
    } 
};

sentenceBuilder.buildSentence();
sentenceBuilder.updateProperty("verb","dancing");
sentenceBuilder.buildSentence();