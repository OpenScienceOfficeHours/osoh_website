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
    //simplify this code

    tag_options() {
      return this.collateTags(this.all_items);
    },
    species_options() {
      return this.collateSpecies(this.all_items);
    },
    modality_options() {
      return this.collateModalities(this.all_items);
    },
    //////////////////////
    tag_options_filtered() {
      return this.tag_options.filter(c => {
        return (c.toLowerCase().includes(this.tag_text.toLowerCase()));
      })
    },
    species_options_filtered() {
      return this.species_options.filter(c => {
        return (c.toLowerCase().includes(this.species_text.toLowerCase()));
      })
    },
    modality_options_filtered() {
      return this.modality_options.filter(c => {
        return (c.toLowerCase().includes(this.modality_text.toLowerCase()));
      })
    },
    //////////////////////
    tag_options_available() {
      return this.tag_options.filter(c => {
        return (!this.search_tags.includes(c));
      })
    },
    species_options_available() {
      return this.species_options.filter(c => {
        return (!this.search_species.includes(c));
      })
    },
    modality_options_available() {
      return this.modality_options.filter(c => {
        return (!this.search_modalities.includes(c));
      })
    },
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
  mounted() {
    this.getJSONblob(file_path);
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
          }
        }
      }
      rawFile.open("GET", file, false);
      rawFile.send();
    },
    ////////////////////
    filterTags() {
      this.search_tags = this.search_tags.filter(c => {
        return (this.tag_options.includes(c));
      })
    },
    filterSpecies() {
      this.search_species = this.search_species.filter(c => {
        return (this.species_options.includes(c));
      })
    },
    filterModalities() {
      this.search_modalities = this.search_modalities.filter(c => {
        return (this.modality_options.includes(c));
      })
    },
    ////////////////////
    addTag() {
      if (this.tag_options.includes(this.tag_text)) {
        this.search_tags.push(this.tag_text);
        this.tag_text = '';
      }
    },
    addSpecies() {
      if (this.species_options.includes(this.species_text)) {
        this.search_species.push(this.species_text);
        this.species_text = '';
      }
    },
    addModality() {
      if (this.modality_options.includes(this.modality_text)) {
        this.search_modalities.push(this.modality_text);
        this.modality_text = '';
      }
    },
    ////////////////////
    removeTag(tag) {
      this.search_tags = this.search_tags.filter(c => {
        return (c != tag);
      })
    },
    removeSpecies(species) {
      this.search_species = this.search_species.filter(c => {
        return (c != species);
      })
    },
    removeModality(modality) {
      this.search_modalities = this.search_modalities.filter(c => {
        return (c != modality);
      })
    },
    ////////////////////
    clearTags() {
      this.search_tags = [];
    },
    clearSpecies() {
      this.search_species = [];
    },
    clearModalities() {
      this.search_modalities = [];
    },
    ////////////////////
    clearAll() {
      this.search_tags = [];
      this.search_species = [];
      this.search_modalities = [];
    },
    ////////////////////
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
    ////////////////
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
        else if (val == 'Open Educational Resources') {
          this.search_tags = ['Open Educational Resources'];
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
