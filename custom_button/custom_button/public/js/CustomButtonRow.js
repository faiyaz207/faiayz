import React from 'react';

const CustomButtonRow = ({ doctype, name }) => {
  const handleAdd = () => {
    frappe.new_doc(doctype);
  };

  const handleSearch = () => {
    frappe.prompt({
      fieldname: 'transaction_no',
      label: 'Transaction No',
      fieldtype: 'Data'
    }, (values) => {
      frappe.set_route('Form', doctype, values.transaction_no);
    });
  };

  const handleEdit = () => {
    frappe.prompt({
      fieldname: 'transaction_no',
      label: 'Transaction No',
      fieldtype: 'Data'
    }, (values) => {
      frappe.set_route('Form', doctype, values.transaction_no);
    });
  };

  const handleUpdate = () => {
    frappe.model.with_doc(doctype, name, () => {
      let doc = frappe.get_doc(doctype, name);
      doc.save();
    });
  };

  const handleView = () => {
    frappe.prompt({
      fieldname: 'transaction_no',
      label: 'Transaction No',
      fieldtype: 'Data'
    }, (values) => {
      frappe.set_route('Form', doctype, values.transaction_no);
    });
  };

  const handleDelete = () => {
    frappe.prompt({
      fieldname: 'transaction_no',
      label: 'Transaction No',
      fieldtype: 'Data'
    }, (values) => {
      frappe.call({
        method: 'frappe.client.delete',
        args: {
          doctype: doctype,
          name: values.transaction_no
        },
        callback: (r) => {
          if (!r.exc) {
            frappe.show_alert({
              message: __('Document deleted'),
              indicator: 'green'
            });
            frappe.set_route('List', doctype);
          }
        }
      });
    });
  };

  return (
    <div className="custom-button-row">
      <button className="btn btn-primary" onClick={handleAdd}>Add</button>
      <button className="btn btn-default" onClick={handleSearch}>Search</button>
      <button className="btn btn-default" onClick={handleEdit}>Edit</button>
      <button className="btn btn-default" onClick={handleUpdate}>Update</button>
      <button className="btn btn-default" onClick={handleView}>View</button>
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default CustomButtonRow;

