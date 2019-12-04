
Vue.component('button-counter', {
  props: ['prefix'],
  data: function() {
    return {
      count: 0
    }
  },
  template: `
    <div>
      <slot></slot>
      <button v-on:click="count++">{{ prefix }} - You clicked me {{ count }} times.</button>
    </div>
  `
});

/*
  https://vuejs.org/v2/guide/components-registration.html
*/

const vm = new Vue({
  el: '#app',
  data: {
    appName: 'Jot',
    message: "What's up?!",
    themeClass: 'light',
  },
  computed: {
    nextThemeName: function() {
      const nextTheme = this.themeClass === 'light' ? 'dark' : 'light';
      return nextTheme.substring(0, 1).toUpperCase() + nextTheme.substring(1, nextTheme.length) + " Theme";
    }
  },
  methods: {
    toggleTheme: function() {
      this.themeClass = this.themeClass === 'light' ? 'dark' : 'light';
    }
  }
});
