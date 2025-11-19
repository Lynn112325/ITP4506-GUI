$(document).ready(function(){
    new DataTable('#orders');

    new DataTable('#menu');

    // open the #addOption modal and ...
    $('.addOption .add').click(function(){
        var optionCount = $('#myDiv').find('input[type="radio"]').length;
        $('#addOption .modal-title').text('Option ' + optionCount + 1);
    })

    $('#menu2').hide();
    $('#back').hide();
    var maxSelectNum;
    var option = `<div class="clearfix option mb-2">
                    <input type="radio" class="disabled" name="option">
                    <label for="option"><input type="text" class="form-control p-1 ms-2">
                    </label>
                    <span class="ms-5 text-secondary small-text">+$</span><input type="number" name="" id="addPrice" class="float-end form-control p-1" min="0" value="0">
                </div>`;
    var optionType;
    var optionDetail = `<div class="existedOption">
                            <div class="clearfix">
                                <a class="btn text-start float-start" data-bs-toggle="collapse" href="">
                                    <span class="optionID"></span>
                                </a>
                                <div class="btn-warning rounded-2 float-end m-2 shadow-sm" data-bs-toggle="modal" data-bs-target="#addOption">
                                    <span class="material-symbols-outlined">
                                        settings
                                    </span>
                                </div>
                            </div>
                            <div id="" class="collapse" data-bs-parent="#accordion">
                                <div class="p-2 border-top detail">
                                    <div class="clearfix">
                                        <div class="float-start small-text pt-1 selectOpt"></div>
                                        <div class="small-text float-end border-success text-success border bg-white rounded-2 justify-content-center d-flex p-1 ms-5">Required</div>
                                    </div>
                                </div>
                            </div>`;
    var detail = `<div class="clearfix mt-2 d-flex align-items-center">
                    <input type="" class="form-check-input me-1 disabled" id="option" name="" value="">
                        <label class="form-check-label pt-1" for="option">
                            <p class="mb-0 float-start small">
                                
                            </p>
                        </label>
                        <p class="m-0 ms-auto float-end fw-bold">
                            <span class="me-2 text-secondary small-text p-1 border rounded-3 bg-light">
                                
                            </span>
                        </p>
                    </div>`;

    // manage option content
    document.querySelector('#next').addEventListener("click", function () {
        // add option and display it
        if($(this).text() == 'Finish') {

            var displayOptId = $('.existedOption').find('.collapse').last().attr('id');
            // alert(displayOptId);
            if (typeof displayOptId === 'undefined') {
                displayOptId = '#option0';
            }

            $('.itemOption').append(optionDetail);
            var target = $('.existedOption').last();
            // alert($('#menu1 input[type="text"]').val());

            var id = parseInt(displayOptId.match(/\d+/)[0]);
            target.find('[data-bs-toggle="collapse"]').attr('href', '#option' + (id + 1).toString());
            target.find('.collapse').attr('id', 'option' + (id + 1).toString());
            
            // optionTitle
            var text = $('#menu1 input[type="text"]').val();
            target.find('.optionID').text(text);
            
            // select up to ?
            var text = $('#menu1 .selectNum').val();
            if (text == '1') {
                target.find('.selectOpt').text('Select 1');
            } else {
                target.find('.selectOpt').text('Select up to ' + text);
            }
            var type;
            if($("#menu2 input[type='checkbox']").length != 0)
                type = 'checkbox';
            else
                type = 'radio';
            $(".option").each(function(){

                var text = $(this).find("input[type='text']").val();
                // alert(text);
                if(text.trim() != '') {
                
                    $('.existedOption').last().find('.detail').append(detail);
                    target = $('.existedOption').last();
                    target = target.find('.detail').children().last();

                    target.find('label p').text(text);
                    text = $(this).find("#addPrice").val();
                    if(text == 0)
                        target.find('p span').text('free');
                    else
                        target.find('p span').text('+$' + text);
                }
            });


            $('.modal').modal('hide');
            return false;
        }
        var check = true;
        $('#menu1 input').each(function() {
            if($(this).val().trim() === '') {
                $(this).addClass('danger-shadow');
                check = false;
            }
        });
        if(check == true) {

            $('#menu1').hide();
            $('#menu2').show();
            $('#back').show();
            maxSelectNum = $('.selectNum').val();
            $('#addOption .modal-header .modal-title span')
            .text(' - ' + $('#menu1 input[type="text"]').val());
            if(maxSelectNum == 1) {
                optionType = 'radio';
            } else {
                optionType = 'checkbox';
            }

            if($('#menu2 .options .option').length == 0) {
                $('#menu2 .options').append(option);
                $('#menu2 .options .option .disabled').attr('type', optionType);
            }
            if($('#menu2 .options .option').length > 0) {
                $('#menu2 .options .option').each(function(){
                    $(this).find('.disabled').attr('type', optionType);
                });
            }
            $(this).text('Finish');
            $('#menu2 .options .option').last().find("input[type='text']").focus();
        }
    });

    $('#finish').click(function(){
        alert('save successfully')
    })

    $('#back').click(function(){
        $('#menu1').show();
        $('#menu2').hide();
        $('#back').hide();
        $('#next').text('Next');
    });

    
    $('#menu2 #add').click(function(){
        $('#menu2 .options').append(option);
        $('#menu2 .options .option .disabled').attr('type', optionType);
        $('#menu2 .options .option').last().find("input[type='text']").focus();
    });

    $('#necessity').change(function(){
        if($('label[for="necessity"]').hasClass('text-success')) {
            $('label[for="necessity"]').text('Optional')
            .removeClass('text-success border-success')
            .addClass('text-dark');
        } else {
            $('label[for="necessity"]').text('Required')
            .removeClass('text-dark')
            .addClass('text-success border-success');
        }
    });

    $('#menu1 input').change(function(){
        if($(this).val().trim() != '') {
            $(this).removeClass('danger-shadow');
        }
    });

    if ($('#status').val() == "available") {
        $('#status').css({'background-color': 'rgb(25,135,84)', 'color': 'white'});
    } else if ($('#status').val() == "unavailable") {
        $('#status').css({'background-color': 'rgb(220,53,69)', 'color': 'white'});
    } else {
        $('#status').css({'background-color': 'rgb(255,193,7)', 'color': 'black'});
    }

    $('#orders .pickup').click(function(){
        alert('click');
        var check = true;
        $(this).closest('tr').find('input[type="checkbox"]').each(function(){
            if(!$(this).prop('checked')) {
                check = false;
                $(this).addClass('danger-shadow');
            }
        });
        if(check)
            $(this).closest('tr').remove();
    });

    $('.itemName').keydown(function(){
        $('.itemTitle').text($(this).val().trim());
    });

    $('#status').change(function() {
        if($(this).val() == "available")
            $(this).css({'background-color': 'rgb(25,135,84)', 'color': 'white'});
        else if($(this).val() == "unavailable")
            $(this).css({'background-color': 'rgb(220,53,69)', 'color': 'white'});
        else
            $(this).css({'background-color': 'rgb(255,193,7)', 'color': 'black'});
        alert('Update Successfully')
    });

    // $('#set').change(function() {
    //     if($(this).val() == "no") {
    //         $(this).val("yes")
    //         .siblings('.form-check-label').text('Yes');
    //     }
    //     else {
    //         $(this).val("no")
    //         .siblings('.form-check-label').text('No');
    //     }
    // });

    $('.itemDetail #types').change(function() {
        var selectedOption = $(this).val().trim();
        $(this).val("");
        var check = false;
        $('.itemDetail .chip').each(function(index, element) {
            if (selectedOption === $(this).text().trim()) {
                check = true;
                return false;
            }
        });
        if (!check) {
            chip = `<div class="col-auto m-1">
                        <div class="chip p-1 bg-light rounded-2 shadow-sm">
                            ${selectedOption}
                            <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
                        </div>
                    </div>`;
            $('.itemDetail .row.justify-content-start').append(chip);
        }
    });

    const dropArea = document.querySelector(".drag-area"),
    dragText = dropArea.querySelector("header");
    button = dropArea.querySelector(".btn");
    input = dropArea.querySelector("input");
    let file; //this is a global variable and we'll use it inside multiple functions
    
    button.onclick = () => {
        input.click(); //if user click on the button then the input also clicked
    }
    
    input.addEventListener("change", function () {
        //getting user select file and [0] this means if user select multiple files then we'll select only the first one
        file = this.files[0];
        dropArea.classList.add("active");
        showFile(); //calling function
    });
    
    
    //If user Drag File Over DropArea
    dropArea.addEventListener("dragover", (event) => {
        event.preventDefault(); //preventing from default behaviour
        dropArea.classList.add("active");
        dragText.textContent = "Release to Upload File";
    });
    
    //If user leave dragged File from DropArea
    dropArea.addEventListener("dragleave", () => {
        dropArea.classList.remove("active");
        dragText.textContent = "Drag & Drop to Upload File";
    });
    
    //If user drop File on DropArea
    dropArea.addEventListener("drop", (event) => {
        event.preventDefault(); //preventing from default behaviour
        //getting user select file and [0] this means if user select multiple files then we'll select only the first one
        file = event.dataTransfer.files[0];
        showFile(); //calling function
    });
    
    function showFile() {
        let fileType = file.type; //getting selected file type
        let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
        if (validExtensions.includes(fileType)) { //if user selected file is an image file
        let fileReader = new FileReader(); //creating new FileReader object
        fileReader.onload = () => {
            let fileURL = fileReader.result; //passing user file source in fileURL variable
            let imgTag = `<div class="d-flex justify-content-center">
                            <img src="${fileURL}" alt="" class='img-thumbnail'>
                            <span class="closebtn">×</span>
                        </div>`;
            //creating an img tag and passing user selected file source inside src attribute
            dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
    
            let closeBtn = dropArea.querySelector(".closebtn");
            closeBtn.addEventListener("click", () => {
                dropArea.innerHTML = `<div class="justify-content-center d-flex align-items-center m-2">Drag & Drop to Upload File</div>
                <div class="icon justify-content-center d-flex align-items-center">
                    <span class="material-symbols-outlined m-2">cloud_upload</span>
                </div>
                <span class="justify-content-center d-flex align-items-center m-2">OR</span>
                <div class="justify-content-center d-flex align-items-center btn btn-warning m-5 mb-1 mt-2 text-white">Browse File</div>
                <input type="file" hidden>`;
                dropArea.classList.remove("active");
                input.value = null;
            });
        }
        fileReader.readAsDataURL(file);
        } else {
            alert("This is not an Image File!");
            dropArea.classList.remove("active");
            dragText.textContent = "Drag & Drop to Upload File";
        }
    }
});