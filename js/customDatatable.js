$(document).ready(function(){
    var table = $('#datatableOrders').DataTable({
    language: {
        search: '<i data-feather="search"></i>',
        "searchPlaceholder":"Search ...",
        oPaginate: {
            sNext: '<i data-feather="arrow-right-circle"></i>',
            sPrevious: '<i data-feather="arrow-left-circle"></i>',
        }
    },
    responsive: true,
    autoWidth:false,
    'columnDefs': [
        { responsivePriority: 1, targets: 0 },
        { responsivePriority: 3, targets: -3 ,searchable: false,orderable: false,className: 'dt-body-center edit-action',},
        { responsivePriority: 4, targets: -2,searchable: false,orderable: false,className: 'dt-body-center print-action', },
        { responsivePriority: 5, targets: -1 ,searchable: false,orderable: false,className: 'dt-body-center hist-action',},
        {
        targets: 1,
        searchable: false,
        orderable: false,
        responsivePriority: 2,
        className: 'dt-body-center',
        render: function (data, type, full, meta){
            return '<input type="checkbox" name="id[]" value="' + $('<div/>').text(data).html() + '">';
            },
        }
    ],
    dom: 'Bfrtip',
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
    'order': [[0, 'asc']],
    "drawCallback": function( settings ) {
        feather.replace();
    }
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