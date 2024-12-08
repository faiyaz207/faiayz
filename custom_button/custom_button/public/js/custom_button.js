frappe.ui.form.on('Purchase Receipt, Purchase Invoice, Journal Entry, Sales Invoice, Delivery Note, Payment Entry, Stock Entry', {
    refresh: function(frm) {
      let wrapper = frm.get_field('custom_buttons').$wrapper;
      wrapper.empty();
      
      let customButtonRow = new frappe.CustomButtonRow({
        parent: wrapper,
        doctype: frm.doctype,
        name: frm.docname
      });
      customButtonRow.render();
    }
  });
  
  frappe.CustomButtonRow = class CustomButtonRow {
    constructor(opts) {
      Object.assign(this, opts);
      this.make();
    }
  
    make() {
      this.wrapper = $('<div class="custom-button-row-wrapper">').appendTo(this.parent);
    }
  
    render() {
      let component = React.createElement(CustomButtonRow, {
        doctype: this.doctype,
        name: this.name
      });
      ReactDOM.render(component, this.wrapper[0]);
    }
  };
  
  