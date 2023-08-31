$(document).ready( function () { 
    let formdata = [];
    $("#newformdiv").hide();

    // function of form to get user values for textbox
    function addTextForm () {
        $("#myform").empty();
        let textboxtypelabel = $("<label>").text("type").attr({ for: "textboxtype", class: "form-label"});
        let textboxtype = $('<input/>').attr({ 
            type: "text", 
            name: "type", 
            id: "textboxtype", 
            class: ("form-control"),
            value: window.fieldtype,
            readonly: true
        });

        let textboxnamelabel = $("<label>").text("name").attr({ for: "textboxname", class: "form-label"});
        let textboxname = $('<input/>').attr({ 
            type: "text", 
            name: "name", 
            id: "textboxname", 
            class: ("form-control"),
            placeholder: "Enter Field name"
        });

        let textboxidlabel = $("<label>").text("id").attr({ for: "textboxid", class: "form-label"});
        let textboxid = $('<input/>').attr({ 
            type: "text", 
            name: "id", 
            id: "textboxid", 
            class: ("form-control"),
            placeholder: "Enter Field id"
        });

        let textboxclasslabel = $("<label>").text("class").attr({ for: "textboxclass", class: "form-label"});
        let textboxclass = $('<input/>').attr({ 
            type: "text", 
            name: "class", 
            id: "textboxclass", 
            class: ("form-control"),
            placeholder: "Enter Field class"
        });

        let textboxvaluelabel = $("<label>").text("value").attr({ for: "textboxvalue", class: "form-label"});
        let textboxvalue = $('<input/>').attr({ 
            type: "text", 
            name: "value", 
            id: "textboxvalue", 
            class: ("form-control"),
            placeholder: "Enter Field value"
        });

        let textboxplaceholderlabel = $("<label>").text("placeholder").attr({ for: "textboxplaceholder", class: "form-label"});
        let textboxplaceholder = $('<input/>').attr({ 
            type: "text", 
            name: "placeholder", 
            id: "textboxplaceholder", 
            class: ("form-control"),
            placeholder: "Enter Field placeholder"
        });

        let reqtrue = $('<input/>').attr({ type: 'radio', name: 'required', value: 'true', id: 'reqtrue'}).addClass("required");
        let reqtruelable = "<label for='reqtrue'>true</label>";
        let reqfalse = $('<input/>').attr({ type: 'radio', name: 'required', value: 'false', id: 'reqfalse'}).addClass("required");
        let reqfalselable = "<label for='reqfalse'>false</label>";

        let readtrue = $('<input/>').attr({ type: 'radio', name: 'readonly', value: 'true', id: 'readtrue'}).addClass("readonly");
        let readtruelable = "<label for='readtrue'>true</label>";
        let readfalse = $('<input/>').attr({ type: 'radio', name: 'readonly', value: 'false', id: 'readfalse'}).addClass("readonly");
        let readfalselable = "<label for='readfalse'>false</label>";

        var save = $('<input type="button" value="save" id="save" class="btn btn-primary"/>');
        var cancel= $('<input type="button" value="cancel" id="cancel" class="btn btn-danger"/>');

        $("#myform").append(textboxtypelabel);
        $("#myform").append(textboxtype);
        $("#myform").append(textboxnamelabel);
        $("#myform").append(textboxname);
        $("#myform").append(textboxidlabel);
        $("#myform").append(textboxid);
        $("#myform").append(textboxclasslabel)
        $("#myform").append(textboxclass);
        $("#myform").append(textboxvaluelabel);
        $("#myform").append(textboxvalue);
        $("#myform").append(textboxplaceholderlabel);
        $("#myform").append(textboxplaceholder);
        $("#myform").append($('<div>Required</div>'));
        $("#myform").append(reqtrue);
        $("#myform").append(reqtruelable);
        $("#myform").append(reqfalse);
        $("#myform").append(reqfalselable);
        $("#myform").append($('<div>Readonly</div>'));
        $("#myform").append(readtrue);
        $("#myform").append(readtruelable);
        $("#myform").append(readfalse);
        $("#myform").append(readfalselable);
        $("#myform").append($('<div/>'));
        $("#myform").append(save);
        $("#myform").append(cancel);
    }

    // function of form to get user values for radio

    function formForRadio() {
        $("#myform").empty();
        let textboxtypelabel = $("<label>").text("type").attr({ for: "textboxtype", class: "form-label"});
        let textboxtype = $('<input/>').attr({ 
            type: "text", 
            name: "type", 
            id: "textboxtype", 
            class: ("form-control"),
            value: window.fieldtype,
            readonly: true
        });

        let textboxnamelabel = $("<label>").text("name").attr({ for: "textboxname", class: "form-label"});
        let textboxname = $('<input/>').attr({ 
            type: "text", 
            name: "name", 
            id: "textboxname", 
            class: ("form-control"),
            placeholder: "Enter Field name"
        });

        let textboxidlabel = $("<label>").text("id").attr({ for: "textboxid", class: "form-label"});
        let textboxid = $('<input/>').attr({ 
            type: "text", 
            name: "id", 
            id: "textboxid", 
            class: ("form-control"),
            placeholder: "Enter Field id"
        });

        let textboxclasslabel = $("<label>").text("class").attr({ for: "textboxclass", class: "form-label"});
        let textboxclass = $('<input/>').attr({ 
            type: "text", 
            name: "class", 
            id: "textboxclass", 
            class: ("form-control"),
            placeholder: "Enter Field class"
        });

        let textboxvaluelabel = $("<label>").text("value").attr({ for: "textboxvalue", class: "form-label"});
        let textboxvalue = $('<input/>').attr({ 
            type: "text", 
            name: "value", 
            id: "textboxvalue", 
            class: ("form-control"),
            placeholder: "Enter Field value"
        });

        var save = $('<input type="button" value="save" id="save" class="btn btn-primary"/>');
        var cancel= $('<input type="button" value="cancel" id="cancel" class="btn btn-danger"/>');

        $("#myform").append(textboxtypelabel);
        $("#myform").append(textboxtype);
        $("#myform").append(textboxnamelabel);
        $("#myform").append(textboxname);
        $("#myform").append(textboxidlabel);
        $("#myform").append(textboxid);
        $("#myform").append(textboxclasslabel)
        $("#myform").append(textboxclass);
        $("#myform").append(textboxvaluelabel);
        $("#myform").append(textboxvalue);
        $("#myform").append(save);
        $("#myform").append(cancel);
    }

    // function of form to get user values for select/opt

    function formForSelect() {
        $("#myform").empty();
        let textboxtypelabel = $("<label>").text("type").attr({ for: "textboxtype", class: "form-label"});
        let textboxtype = $('<input/>').attr({ 
            type: "text", 
            name: "type", 
            id: "textboxtype", 
            class: ("form-control"),
            value: window.fieldtype,
            readonly: true
        });

        let textboxnamelabel = $("<label>").text("name").attr({ for: "textboxname", class: "form-label"});
        let textboxname = $('<input/>').attr({ 
            type: "text", 
            name: "name", 
            id: "textboxname", 
            class: ("form-control"),
            placeholder: "Enter Field name"
        });

        let textboxidlabel = $("<label>").text("id").attr({ for: "textboxid", class: "form-label"});
        let textboxid = $('<input/>').attr({ 
            type: "text", 
            name: "id", 
            id: "textboxid", 
            class: ("form-control"),
            placeholder: "Enter Field id"
        });

        let textboxclasslabel = $("<label>").text("class").attr({ for: "textboxclass", class: "form-label"});
        let textboxclass = $('<input/>').attr({ 
            type: "text", 
            name: "class", 
            id: "textboxclass", 
            class: ("form-control"),
            placeholder: "Enter Field class"
        });

        let optionnamelabel = $("<label>").text("optionname").attr({ for: "optionname", class: "form-label"});
        let optionname = $('<input/>').attr({ 
            type: "text", 
            name: "name", 
            id: "optionname" + optcount, 
            class: ("form-control optname"),
            placeholder: "Enter Field name"
        });

        let optionvaluelabel = $("<label>").text("optionvalue").attr({ for: "optionvalue", class: "form-label"});
        let optionvalue = $('<input/>').attr({ 
            type: "text", 
            name: "value", 
            id: "optionvalue" + optcount, 
            class: ("form-control optvalue"),
            placeholder: "Enter Field value"
        });

        var save = $('<input type="button" value="save" id="save" class="btn btn-primary"/>');
        var addoption = $('<input type="button" value="addoption" id="addoption" class="btn btn-success"/>');
        var cancel= $('<input type="button" value="cancel" id="cancel" class="btn btn-danger"/>');

        $("#myform").append(textboxtypelabel);
        $("#myform").append(textboxtype);
        $("#myform").append(textboxnamelabel);
        $("#myform").append(textboxname);
        $("#myform").append(textboxidlabel);
        $("#myform").append(textboxid);
        $("#myform").append(textboxclasslabel)
        $("#myform").append(textboxclass);
        $("#myform").append(optionnamelabel);
        $("#myform").append(optionname);
        $("#myform").append(optionvaluelabel);
        $("#myform").append(optionvalue);
        $("#myform").append(save);
        $("#myform").append(addoption);
        $("#myform").append(cancel);
        $("#myform").append($('<div/>'));

    }

// calling functions according to fieldtype

    $("#next").on("click", function next() {
        $("#newformdiv").hide();
        $("#jsondiv").show();
        window.fieldtype = $("#fieldtype").val();

        if (fieldtype == "text" || fieldtype == "email" || fieldtype == "password" || fieldtype == "number" ||  fieldtype == "textarea") {
            addTextForm ();
        } else if (fieldtype == "radio"|| fieldtype == "checkbox" || fieldtype == "button") {
            formForRadio();
        } else if (fieldtype == "select"){
            window.optcount = 1;
            formForSelect();
        }
    }) 

// save user data and make a new form 

    $("#myform").on("click", "#save", function() {
        window.data = {};
        window.opts = {};

        let fieldtype = $("#fieldtype").val(),
        fieldname = $("#textboxname").val(),
        fieldvalue = $("#textboxvalue").val(),
        fieldid = $("#textboxid").val(),
        fieldclass = $("#textboxclass").val(),
        fieldplaceholder = $("#textboxplaceholder").val(),
        fieldrequired = $('input[name="required"]:checked').val(),
        booleanfieldrequired = (fieldrequired == "true") ? true : false,
        fieldreadonly = $('input[name="readonly"]:checked').val(),
        booleanfieldreadonly = (fieldreadonly == "true") ? true : false;
        let optname = [];
        optname = $(".optname").val();

        let label = $("<label>").text(fieldid).attr({ for: fieldid, class: "form-label"});
        if (fieldtype == "text" || fieldtype == "email" || fieldtype == "password" || fieldtype == "number") {
            data.type = fieldtype;
            data.name = fieldname;
            data.value = fieldvalue;
            data.id = fieldid;
            data.class = fieldclass;
            data.placeholder = fieldplaceholder;
            data.required = booleanfieldrequired;
            data.readonly = booleanfieldreadonly;

            let textbox = $('<input/>').attr({ 
                type: fieldtype, 
                name: fieldname, 
                value: fieldvalue, 
                id: fieldid, 
                class: ("form-control " + fieldclass),
                placeholder: fieldplaceholder, 
                required: booleanfieldrequired, 
                readonly: booleanfieldreadonly
            });
            $("#newformdiv").append(label);
            $("#newformdiv").append(textbox);
        } else if (fieldtype == "textarea") {
            data.type = fieldtype;
            data.name = fieldname;
            data.value = fieldvalue;
            data.id = fieldid;
            data.class = fieldclass;
            data.placeholder = fieldplaceholder;
            data.required = booleanfieldrequired;
            data.readonly = booleanfieldreadonly;

            let textarea = $('<textarea/>').attr({ name: fieldname, 
                value: fieldvalue, 
                id: fieldid, 
                class: ("form-control " + fieldclass), 
                placeholder: fieldplaceholder, 
                required: fieldrequired, 
                readonly: fieldreadonly
            });

            $("#newformdiv").append(label);
            $("#newformdiv").append(textarea);
        } else if (fieldtype == "radio") {
            data.type = fieldtype;
            data.name = fieldname;
            data.value = fieldvalue;
            data.id = fieldid;
            data.class = fieldclass;

            let radiobtn = $('<input/>').attr({ type: 'radio', 
                name: fieldname, 
                value: fieldvalue, 
                id: fieldid, 
                class: ("form-check-input me-3 " + fieldclass),
            });

                $("#newformdiv").append(label);
                $("#newformdiv").append(radiobtn);
        } else if (fieldtype == "checkbox") {
            data.type = fieldtype;
            data.name = fieldname;
            data.value = fieldvalue;
            data.id = fieldid;
            data.class = fieldclass;

            let checkbtn = $('<input/>').attr({ type: 'checkbox', 
                name: fieldname, 
                value: fieldvalue, 
                id: fieldid, 
                class: ("form-check-input me-3 " + fieldclass),
            });

            $("#newformdiv").append(checkbtn);
            $("#newformdiv").append(label);
        } else if (fieldtype == "button") {
            data.type = fieldtype;
            data.name = fieldname;
            data.value = fieldvalue;
            data.id = fieldid;
            data.class = fieldclass;

            let normalbtn = $('<input/>').attr({ 
                type: fieldtype, 
                name: fieldname, 
                value: fieldvalue, 
                id: fieldid, 
                class: ("btn col-1 " + fieldclass),
            });
            $("#newformbtn").append(normalbtn); 
        } else if (fieldtype == "select") {
            window.opts = [];
            $("#opt-section").show();
            data.type = fieldtype;
            data.name = fieldname;
            data.id = fieldid;
            data.class = fieldclass;
            data.options = opts;

            let optl = $(".optname").length;
            for (let i = 1; i<=optl; i++) {
                let optiondata = {};
                let optname = $("#optionname" + i).val();
                let optvalue = $("#optionvalue" + i).val();

                optiondata.name = optname;
                optiondata.value = optvalue;
                opts.push(optiondata); 

            }

            let select = $('<select>').attr({
                name: fieldname, 
                id: fieldid, 
                class: ("form-select " + fieldclass),
            });
            $("#newformdiv").append(select);

            for (let j = 0; j < opts.length; j++) {
                let keys = [];
                let values = [];
                keys = Object.keys(opts[j]);
                values = Object.values(opts[j]);                
                let option = $("<option value=" + opts[j].value + ">" + opts[j].name + "</option>");
                $('#' + fieldid).append(option);
            
            }
        }

        $("#myform").empty();
        formdata.push(data);
        let jsondata = JSON.stringify(formdata, null, 1);
        $("#showjsondiv").text(jsondata);
    });

//cancel function

    $("#myform").on("click", "#cancel", function() {
        $("#myform").empty();
    });

// add optons for select function

    $("#myform").on("click", "#addoption", function addOption() {
        optcount++;
        let optionnamelabel = $("<label>").text("optionname").attr({ for: "optionname", class: "form-label"});
        let optionname = $('<input/>').attr({ 
            type: "text", 
            name: "name", 
            id: "optionname" + optcount, 
            class: ("form-control optname"),
            placeholder: "Enter Field name"
        });

        let optionvaluelabel = $("<label>").text("optionvalue").attr({ for: "optionvalue", class: "form-label"});
        let optionvalue = $('<input/>').attr({ 
            type: "text", 
            name: "value", 
            id: "optionvalue" + optcount, 
            class: ("form-control optvalue"),
            placeholder: "Enter Field value"
        });

        $("#myform").append(optionnamelabel);
        $("#myform").append(optionname);
        $("#myform").append(optionvaluelabel);
        $("#myform").append(optionvalue);
    })

// show or hide new form

    $("#showform").on("click", function showForm() {
        $("#newformdiv").toggle();
        $("#jsondiv").toggle();
        
    });
});