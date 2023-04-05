// File path where integrations/extensions/use cases are listed
const file_path = '/osoh_website/assets/js/integrations.json';

// Create VueJS app to load `integrations.json` and allow filtering by name/tag
var app = new Vue({
    el: "#app",
    delimiters: ['[[', ']]'],
    data: {
      all_items: [],
      sort_name: true,

      search_tags: [],
      search_species: [],
      search_modalities: [],

      tag_text: '',
      species_text: '',
      modality_text: '',

      // tag_dropdown_open: false,

      tag_options: [],
      species_options: [],
      modality_options: [],

      tag_options_filtered: [],
      species_options_filtered: [],
      modality_options_filtered: [],

      tag_options_available: [],
      species_options_available: [],
      modality_options_available: [],

      popoverShow: false,
      popoverHide: true,
      radio_group_value: 'all'
    },
  computed:
  {
    //////////////////////
    tagFilteredItems() {
      items = this.all_items;
      return items.filter(c => {
        if (this.search_tags.length == 0) return true;
        return (this.search_tags.every(v => c.tags.includes(v)));
      })
    },
    speciesFilteredItems() {
      items = this.tagFilteredItems;
      return items.filter(c => {
        if (this.search_species.length == 0) return true;
        return (this.search_species.every(v => c.species.includes(v)));
      })
    },
    modalityFilteredItems() {
      items = this.speciesFilteredItems;
      return items.filter(c => {
        if (this.search_modalities.length == 0) return true;
        return (this.search_modalities.every(v => c.modalities.includes(v)));
      })
    },
    allFilteredItems() {
      return this.modalityFilteredItems;
    },
  //////////////////
  },
  methods: {
    getJSONblob(file) {
      var app = this;
      var rawFile = new XMLHttpRequest();
      rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
          if (rawFile.status === 200 || rawFile.status == 0) {
            var allText = rawFile.responseText;
            app.all_items = JSON.parse(allText);
          } else if (rawFile.status === 404) {
            router.push({ name: '404' })
          } else {
            // TODO: figure out what to do here
          }
        }
      }
      rawFile.open("GET", file, false);
      rawFile.send();
    },
//////////////////
    collateTags(all_items) {
      all_tags = [];
      for (let i = 0; i < all_items.length; i++) {
        for (let j = 0; j < all_items[i].tags.length; j++) {
          current_tag = all_items[i].tags[j];
          if (all_tags.indexOf(current_tag) === -1) {
            all_tags.push(current_tag);
          }
        }
      }
      return all_tags
    },
    collateSpecies(all_items) {
      all_species = [];
      for (let i = 0; i < all_items.length; i++) {
        for (let j = 0; j < all_items[i].species.length; j++) {
          current_species = all_items[i].species[j];
          if (all_species.indexOf(current_species) === -1) {
            all_species.push(current_species);
          }
        }
      }
      return all_species
    },
    collateModalities(all_items) {
      all_modalities = [];
      for (let i = 0; i < all_items.length; i++) {
        for (let j = 0; j < all_items[i].modalities.length; j++) {
          current_modality = all_items[i].modalities[j];
          if (all_modalities.indexOf(current_modality) === -1) {
            all_modalities.push(current_modality);
          }
        }
      }
      return all_modalities
    },
//////////////////////
    addSearchTag(option) {
      this.radio_group_value = false;
      this.search_tags.push(option);
      this.filterTags();
    },
    addSearchSpecies(option) {
      this.radio_group_value = false;
      this.search_species.push(option);
      this.filterSpecies();
    },
    addSearchModality(option) {
      this.radio_group_value = false;
      this.search_modalities.push(option);
      this.filterModalities();
    },
//////////////////////
    removeSearchTag(tag) {
      idx = this.search_tags.indexOf(tag);
      if (idx > -1) {
        this.search_tags.splice(idx, 1);
      }
      this.filterTags();
    },
    removeSearchSpecies(species) {
      idx = this.search_species.indexOf(species);
      if (idx > -1) {
        this.search_species.splice(idx, 1);
      }
      this.filterSpecies();
    },
    removeSearchModality(modality) {
      idx = this.search_modalities.indexOf(modality);
      if (idx > -1) {
        this.search_modalities.splice(idx, 1);
      }
      this.filterModalities();
    },
//////////////////////
    filterTags() {
      this.tag_options_available = this.tag_options.filter(x => this.search_tags.indexOf(x) === -1);
      this.tag_options_filtered = this.tag_options_available.filter(str => str.indexOf(this.tag_text) >= 0);
    },
    filterSpecies() {
      this.species_options_available = this.species_options.filter(x => this.search_species.indexOf(x) === -1);
      this.species_options_filtered = this.species_options_available.filter(str => str.indexOf(this.species_text) >= 0);
    },
    filterModalities() {
      this.modality_options_available = this.modality_options.filter(x => this.search_modalities.indexOf(x) === -1);
      this.modality_options_filtered = this.modality_options_available.filter(str => str.indexOf(this.modality_text) >= 0);
    },
//////////////////////
      selectRadioButton() {
        val = this.radio_group_value;
        console.log(val)

        if (val == 'all'){
          this.search_tags = [];
          this.filterTags();
        }
        else if (val == 'Open Publishing') {
          this.search_tags = ['Open Publishing'];
          this.filterTags();
        }
        else if (val == 'Open Data') {
          this.search_tags = ['Open Data'];
          this.filterTags();
        }
        else if (val == 'Open Code/Software') {
          this.search_tags = ['Open Code/Software'];
          this.filterTags();
        }
        else if (val == 'Open Methods/Protocols') {
          this.search_tags = ['Open Methods/Protocols'];
          this.filterTags();
        }
        else if (val == 'Open Hardware') {
          this.search_tags = ['Open Hardware'];
          this.filterTags();
        }
      },
    },
    beforeMount(){
      this.getJSONblob(file_path)
      this.tag_options = this.collateTags(this.all_items)
      this.species_options = this.collateSpecies(this.all_items)
      this.modality_options = this.collateModalities(this.all_items)
    },
    mounted(){
      this.tag_options_filtered = this.tag_options;
      this.species_options_filtered = this.species_options;
      this.modality_options_filtered = this.modality_options;

      this.tag_options_available = this.tag_options;
      this.species_options_available = this.species_options;
      this.modality_options_available = this.modality_options;
    }

});
