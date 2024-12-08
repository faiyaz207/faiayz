import frappe
from frappe.custom.doctype.custom_field.custom_field import create_custom_field

def after_install():
    doctypes = [
        'Purchase Receipt', 'Purchase Invoice', 'Journal Entry',
        'Sales Invoice', 'Delivery Note', 'Payment Entry', 'Stock Entry'
    ]

    for dt in doctypes:
        create_custom_field(dt, {
            'fieldname': 'custom_buttons',
            'label': 'Custom Buttons',
            'fieldtype': 'HTML',
            'insert_after': 'title'
        })

def before_uninstall():
    doctypes = [
        'Purchase Receipt', 'Purchase Invoice', 'Journal Entry',
        'Sales Invoice', 'Delivery Note', 'Payment Entry', 'Stock Entry'
    ]

    for dt in doctypes:
        frappe.delete_doc('Custom Field', f'{dt}-custom_buttons')

