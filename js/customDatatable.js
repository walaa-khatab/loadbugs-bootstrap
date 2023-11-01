$(document).ready(function(){
    var table = $('#example').DataTable({
    language: {
        search: '<i data-feather="search"></i>'
    },
    "responsive": true,
    'columnDefs': [{
         'targets': 0,
         'searchable': false,
         'orderable': false,
         'className': 'dt-body-center',
         'render': function (data, type, full, meta){
            return '<input type="checkbox" name="id[]" value="' + $('<div/>').text(data).html() + '">';
         },
      }],
    dom: 'Blfrtip',
    buttons: [{
                extend:    'copyHtml5',
                text:      '<i data-feather="copy"></i>',
                titleAttr: 'Copy'
            },
            {
                extend:    'excelHtml5',
                text:      '<i data-feather="file-text"></i>',
                titleAttr: 'Excel'
            },
            {
                extend:    'csvHtml5',
                text:      '<i data-feather="file"></i>',
                titleAttr: 'CSV'
            },
            {
                extend:    'pdfHtml5',
                text:      '<i data-feather="book-open"></i>',
                titleAttr: 'PDF'
            },
            {
                extend:    'print',
                text:      '<i data-feather="printer"></i>',
                titleAttr: 'Print'
            }],
    'order': [[1, 'asc']]
   });

  
   // Handle click on "Select all" control
   $('#example-select-all').on('click', function(){
      // Get all rows with search applied
      var rows = table.rows({ 'search': 'applied' }).nodes();
      // Check/uncheck checkboxes for all rows in the table
      $('input[type="checkbox"]', rows).prop('checked', this.checked);
   });

   // Handle click on checkbox to set state of "Select all" control
   $('#example tbody').on('change', 'input[type="checkbox"]', function(){
      // If checkbox is not checked
      if(!this.checked){
         var el = $('#example-select-all').get(0);
         // If "Select all" control is checked and has 'indeterminate' property
         if(el && el.checked && ('indeterminate' in el)){
            // Set visual state of "Select all" control
            // as 'indeterminate'
            el.indeterminate = true;
         }
      }
   });

});