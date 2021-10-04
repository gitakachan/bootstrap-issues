//for modal components
//父組件可用 this.$refs.MODALNAME.show()、this.$refs.MODALNAME.hide() 來控制(需先設定子組件ref)

import Modal from "bootstrap/js/dist/modal";
export default {
  data() {
    return {
      modal: {},
    };
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
