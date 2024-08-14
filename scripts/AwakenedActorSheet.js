class AwakenedActorSheet extends ActorSheet {
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        classes: ["divine-awakening", "sheet", "actor"],
        template: "templates/character-sheet.html",
        width: 600,
        height: 400,
        tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "character"}]
      });
    }
  
    getData() {
      const data = super.getData();
      data.sheet = "character";
      return data;
    }
  }