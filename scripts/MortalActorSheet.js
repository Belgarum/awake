class MortalActorSheet extends ActorSheet {
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        classes: ["divine-awakening", "sheet", "actor"],
        template: "templates/mortal-sheet.html",
        width: 600,
        height: 400,
        tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "mortal"}]
      });
    }
  
    getData() {
      const data = super.getData();
      data.sheet = "mortal";
      return data;
    }
  }