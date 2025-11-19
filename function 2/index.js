$(document).ready(function(){
    var foodType = '';
    $('li #button-minus').addClass('disabled');
    $('#cardType').hide();

    $('#button-addon2').mouseenter(function(){
        $(this).text("Get current Location");
    }).mouseleave(function(){
        $(this).html("<span class='material-symbols-outlined'>location_on</span>");
    });

    $('.list-group-item .material-symbols-outlined').click(function(){
        if($(this).hasClass('like')){
            $(this).removeClass('like');
            $(this).addClass('unlike');
        } else if($(this).hasClass('unlike')) {
            $(this).addClass('like');
            $(this).removeClass('unlike');
        }
    });

    $('.modal-footer #favorites').click(function(){
        if($(this).children().hasClass('like')){
            $(this).children().removeClass('like');
            $(this).children().addClass('unlike');
        } else if($(this).children().hasClass('unlike')) {
            $(this).children().addClass('like');
            $(this).children().removeClass('unlike');
        }
    });

    $('#mySwitch2').click(function(){
        if($('.form-check b').text() == 'Pick-Up') {
            $('.form-check b').text('Delivery');
            $('.deliveryFee').removeClass('text-decoration-line-through');
            $('.payment #Total')
            .text(parseInt($('.payment #total').text()) + parseInt($('.payment .deliveryFee').text()));
        } else {
            $('.form-check b').text('Pick-Up');
            $('.deliveryFee').addClass('text-decoration-line-through');
            $('.payment #Total')
            .text($('.payment #total').text());
        }
    });

    
    $('#mySwitch1').click(function(){
        if($('#plastic .text-secondary').text() == 'No. Thank you for helping us reduce plastic waste.') {
            $('#plastic .text-secondary').text('Yes. The restaurant will include cutlery and/or straws, if available.');
        } else {
            $('#plastic .text-secondary').text('No. Thank you for helping us reduce plastic waste.');
        }
    });

    $('.input-group #button-plus').click(function(){
        // get and set Price
        var num = parseInt($(this).next().val()) + 1;
        $(this).next().attr('value', num );
        
        if( num > 1 ) {
            $(this).next().next().removeClass('disabled');
        }
        
        var total = 0;
        var price = parseInt($(this).closest('.modal').find('.modal-header #price').text());
        total = total + price;

        // check radio
        $(this).closest('.modal').find('.select input[type="radio"]:checked').each(function(){
            var add = $(this)
                        .siblings('.clearfix')
                        .find('.me-2.text-secondary.border.rounded-3.bg-light span')
                        .text()
                        .trim();

            if(parseInt(add)) {
                total = total + parseInt(add);
            }
        });
        
        // check checkbox
        var n = 0;
        $(this).closest('.modal').find('.select input[type="checkbox"]:checked').each(function(){
            n += 1;
            // Select up to 3 (optional)
            if(n >= 3) {
                $(this).parent().parent().find('input[type="checkbox"]:not(:checked)').addClass('disabled')
                .next().find('label').addClass('disabled');
            } else {
                $(this).parent().parent().find('input[type="checkbox"].disabled').removeClass('disabled')
                .next().find('label').removeClass('disabled');
            }

            // get and set Price
            var add = $(this)
                        .siblings('.clearfix')
                        .find('.me-2.text-secondary.border.rounded-3.bg-light span')
                        .text()
                        .trim();

            if(parseInt(add)) {
                total = total + parseInt(add);
            }
        });

        total = total * num;
        $(this).closest('.modal').find('.modal-footer #total').text('Price: $' + total);
    });

    $('.input-group #button-minus').click(function(){
        var num = parseInt($(this).prev().val()) - 1;

        $(this).prev().attr('value', num );

        // object num can not <= 0
        if( num == 1 ) {
            $(this).addClass('disabled');
        }
        // get and Price
        var total = 0;
        var price = parseInt($(this).closest('.modal').find('.modal-header #price').text());
        total = total + price;

        // check radio
        $(this).closest('.modal').find('.select input[type="radio"]:checked').each(function(){
            var add = $(this)
                        .siblings('.clearfix')
                        .find('.me-2.text-secondary.border.rounded-3.bg-light span')
                        .text()
                        .trim();

            if(parseInt(add)) {
                total = total + parseInt(add);
            }
        });

        // check checkbox
        var n = 0;
        $(this).closest('.modal').find('.select input[type="checkbox"]:checked').each(function(){
            n += 1;
            // Select up to 3 (optional)
            if(n >= 3) {
                $(this).parent().parent().find('input[type="checkbox"]:not(:checked)').addClass('disabled')
                .next().find('label').addClass('disabled');
            } else {
                $(this).parent().parent().find('input[type="checkbox"].disabled').removeClass('disabled')
                .next().find('label').removeClass('disabled');
            }

            // get and set Price
            var add = $(this)
                        .siblings('.clearfix')
                        .find('.me-2.text-secondary.border.rounded-3.bg-light span')
                        .text()
                        .trim();

            if(parseInt(add)) {
                total = total + parseInt(add);
            }
        });
        total = total * num;
        $(this).closest('.modal').find('.modal-footer #total').text('Price: $' + total);
    });
    

    $('.select .form-check .form-check-input').click(function(){
        // Remind Required or Completed
        $(this).parent().parent().prev().prev('.clearfix').find('.border.rounded-3.bg-danger')
            .removeClass('bg-danger')
            .addClass('bg-success')
            .text('Completed');

        var total = 0;
        var price = parseInt($(this).closest('.modal').find('.modal-header #price').text());
        total = total + price;

            // check radio
            $(this).closest('.modal').find('.select input[type="radio"]:checked').each(function(){
                var add = $(this)
                            .siblings('.clearfix')
                            .find('.me-2.text-secondary.border.rounded-3.bg-light span')
                            .text()
                            .trim();

                if(parseInt(add)) {
                    total = total + parseInt(add);
                }
            });

            // check checkbox
            var n = 0;
            $(this).closest('.modal').find('.select input[type="checkbox"]:checked').each(function(){
                n += 1;
                // Select up to 3 (optional)
                if(n >= 3) {
                    $(this).parent().parent().find('input[type="checkbox"]:not(:checked)').addClass('disabled')
                    .next().find('label').addClass('disabled');
                } else {
                    $(this).parent().parent().find('input[type="checkbox"].disabled').removeClass('disabled')
                    .next().find('label').removeClass('disabled');
                }

                // get and set Price
                var add = $(this)
                            .siblings('.clearfix')
                            .find('.me-2.text-secondary.border.rounded-3.bg-light span')
                            .text()
                            .trim();

                if(parseInt(add)) {
                    total = total + parseInt(add);
                }
            });
            var num = $(this).closest('.modal').find('.modal-footer .form-control').attr('value');
            total = num * total;

            $(this).closest('.modal').find('.modal-footer #total').text('Price: $' + total);
    });

    $('.modal #addCart').click(function(){
        var go = true; 

        // before add to cart, check option require to select
        $(this).closest('.modal').find('.select .clearfix p b').each(function(){
            if($(this).hasClass('bg-danger')) {
                var targetOffset = $(this).parent().prev().parent().parent().offset().top;
                $('.modal-body').animate({ scrollTop: targetOffset }, 500);
                $(this).parent().prev().parent().parent().addClass('danger-shadow');
                go = false;
            } else if($(this).parent().prev().parent().parent().hasClass('danger-shadow')) {
                $(this).parent().prev().parent().parent().removeClass('danger-shadow');
            }
        });

        // finish checking, add to cart
        if( go == true ) {
            var name = $(this).closest('.modal').find('.modal-title h3').text();
            var src = $(this).closest('.modal').find('.modal-header img').attr('src');
            var total = parseInt($(this).closest('.modal').find('.modal-footer #total').text().replace('Price: $', ''));
            var num = $(this).closest('.modal').find('.modal-footer .form-control').attr('value');
            var price = $(this).closest('.modal').find('#price').text();

            var add = `<li class="list-group-item float list-group-item-action">
                            <div class="clearfix">
                                <b class="float-start text-break">` + name + `<br><span class='small-text text-secondary' id='price'>$(` + price + `)</span></b>
                                <p class="mb-0 float-end"><img src="` + src + `" alt="" class="border rounded-3"></p>
                            </div>
                            <div class="cart">
                            `; 
                            
            // get options
            $(this).closest('.modal').find('.select input[type="radio"]:checked, .select input[type="checkbox"]:checked').each(function(){
                
                var addPrice = $(this)
                                .siblings('.clearfix')
                                .find('.me-2.text-secondary.border.rounded-3.bg-light span')
                                .text()
                                .trim();

                if(!parseInt(addPrice)) {
                    addPrice = '--';
                } else {
                    addPrice = '+$' + addPrice;
                }

                var addOption = $(this).next().find('p.small').text().trim();

                // alert(addOption + addPrice);
                add += `<div class="clearfix">
                            <p class="mb-0 float-start text-secondary"> - ` + addOption + `</p>
                            <p class="mb-0 float-end fw-bold text-secondary add">` + addPrice + `</p>
                        </div>`;
            });
                
                
            add += `</div>
                    <div class="mt-auto clearfix">
                        <p class="fw-bold float-start">$<span class="fw-bold" id='total'>` + total + `</span></p>
                        <div class="input-group input-spinner float-end offcanvas-input">
                            <button class="btn btn-white border" type="button" id="button-plus"> + </button>
                            <input type="text" class="form-control border-start-0 border-end-0 bg-white" value="` + num + `" disabled>
                            <button class="btn btn-white border disabled" type="button" id="button-minus"> - </button>
                            <button class="btn btn-danger border" type="button" id="button-delete">
                                <span class="material-symbols-outlined">
                                    delete
                                </span>
                            </button>
                        </div>
                    </div>
                </li>`;

            $('.offcanvas-body .list-group').append(add);
            $('.badge').text(parseInt($('.badge').text()) + parseInt(num));
            $('.modal').modal('hide');
        }
    });

    
    // remove product from cart
    $(document).on('click','#button-delete' , function() {
        $(this).closest('.list-group-item').remove();
    });

    $(document).on('click', '.offcanvas-input #button-plus', function() {
        // get and set Price
        var num = parseInt($(this).next().val()) + 1;
        $(this).next().attr( 'value', num );

        if( num > 1 ) {
            $(this).next().next().removeClass('disabled');
        }
        
        var price =  parseInt($(this).closest('.list-group-item').find('#price').text().match(/\d+/)[0]);
        var addPrice = 0;
        // alert(price)
        $(this).closest('.list-group-item').find('.add').each(function(){
            var add = $(this).text();
            // alert(add);
            if(add != '--') {
                addPrice += parseInt(add.match(/\d+/)[0]);
            }
        });
        var total = (price + addPrice) * num;
        // alert(price + ' + ' + addPrice + ' * ' + num + ' = ' + total)

        $(this).closest('.list-group-item').find('#total').text(total);
        
        // Set text for .payment
        var total = 0;
        $('.shoppingCart #total').each(function(){
            total += parseInt($(this).text());
        });
        $('.payment #total').text(total);

        $('.payment #Total').text(total + parseInt($('.payment .deliveryFee').text()));


        if($('.payment .deliveryFee').hasClass('text-decoration-line-through'))
            $('.payment #Total').text(total);
        else
            $('.payment #Total').text(total + parseInt($('.payment .deliveryFee').text()));

    });

    $('.space .list-group-item').click(function(){
        $('#check #address').val($(this).text().trim());
        alert('Delivery Address is update to:\n' + $(this).html().replace(/<br>/g, '\n'));
    });

    $('#checkOut').click(function(){
        if($('.payment .deliveryFee').hasClass('text-decoration-line-through')) {
            $('.setAddress').hide();
        } else {
            $('.setAddress').show();
            $('#address').val('20 Tsing Yi Road, Tsing Yi Island, New Territories');
        }
        $('#payTotal').text('$' + $('.payment #Total').text());
    });

    $('#payWith .list-group-item').click(function(){
        
        if($(this).parent().attr('href') == '#cardType') {
            $('#cardType').show();

            $('#payWith .list-group-item').each(function(){
                $(this).removeClass('border-success').removeClass('border-4');
            });
            $(this).addClass('border-success').addClass('border-4');
            $('#payMethod').text('Pay with ' + $(this).text().replace(/►/g, ''));

        } else if($(this).parent().parent().attr('id') != 'cardType'){
            $('#cardType').hide();
            
            $('#payWith .list-group-item').each(function(){
                $(this).removeClass('border-success').removeClass('border-4');
            });
            $(this).addClass('border-success').addClass('border-4');
            $('#payMethod').text('Pay with ' + $(this).text().replace(/►/g, ''));

        } else {
            $('#payMethod').text('Pay with Credit Card (' + $(this).text().replace(/►/g, ''));

            $('#cardType .list-group-item').each(function(){
                $(this).removeClass('border-success').removeClass('border-4');
            });
            
            $(this).addClass('border-success').addClass('border-4');
        }
    });

    $('#success').hide();

    $('#check #finish').click(function(){
        if($('#check #success').is(':visible')) {
            $('#check').modal('hide');
        }
        else if($('#check #Confirm').hasClass('btn-danger') && $('#check .setAddress').is(':visible')) {
            $('#check .setAddress').addClass('danger-shadow');
            $('.modal-body').animate({ scrollTop: $('#check .setAddress').offset().top }, 500);
        } else if ($('#check #payMethod').text().trim() == '') {
            $('#check #payWith').addClass('danger-shadow');

        } else if ($('#check #cardType').is(':visible')) {
            // check cardtype
            
            $('#cardType .list-group-item').each(function(){
                if($(this).hasClass('border-success')) {
                    $('#check .setAddress').hide();
                    $('#check #payWith').hide();
                    $('#success').show();
                } else {
                    $('#check #payWith').addClass('danger-shadow');
                }
            });

        } else {
            $('#check .setAddress').hide();
            $('#check #payWith').hide();
            $('#success').show();
        }
    });

    $(document).on('click', '.offcanvas-input #button-minus', function() {
        var num = parseInt($(this).prev().val()) - 1;

        $(this).prev().attr( 'value', num );

        // object num can not <= 0
        if( num == 1 ) {
            $(this).addClass('disabled');
        }

        var price =  parseInt($(this).closest('.list-group-item').find('#price').text().match(/\d+/)[0]);
        var addPrice = 0;
        // alert(price)
        $(this).closest('.list-group-item').find('.add').each(function(){
            var add = $(this).text();
            // alert(add);
            if(add != '--') {
                addPrice += parseInt(add.match(/\d+/)[0]);
            }
        });
        var total = (price + addPrice) * num;

        $(this).closest('.list-group-item').find('#total').text(total);

        // Set text for .payment
        var total = 0;
        $('.shoppingCart #total').each(function(){
            total += parseInt($(this).text());
        });
        $('.payment #total').text(total);

        $('.payment #Total').text(total + parseInt($('.payment .deliveryFee').text()));
        
    });

    $('#orderProcess1 .nav-link').click(function(){
        if(!$(this).hasClass('active')) {
            $('#orderProcess1 .nav-link:not('+ $(this).attr('href') +')').removeClass('active');
            $(this).addClass('active');
        }
    });

    // openCart
    $('#openCart').click(function(){
        
        // Set text for .payment
        var total = 0;
        $('.shoppingCart #total').each(function(){
            total += parseInt($(this).text());
        });
        $('.payment #total').text(total);

        $('.payment #Total').text(total + parseInt($('.payment .deliveryFee').text()));
    });

    $('#rice').click(function(){
        $('#search').val('');
        foodType = '.rice';
        $('#findFoodType').text('/ Rice');
        $('.rice').show();
        $('.product-grid .col:not(.rice)').hide();
        if($('input[type="checkbox"]:checked#set').length > 0) {
            $('.product-grid .col:not(.Set)').hide();
        }
    });

    $('#noodles').click(function(){
        $('#search').val('');
        foodType = '.noodle';
        $('#findFoodType').text('/ Noodles');
        $('.noodle').show();
        $('.product-grid .col:not(.noodle)').hide();
        if($('input[type="checkbox"]:checked#set').length > 0) {
            $('.product-grid .col:not(.Set)').hide();
        }
    });
    
    $('#drink').click(function(){
        $('#search').val('');
        foodType = '.drink';
        $('#findFoodType').text('/ Drinks');
        $('.drink').show();
        $('.product-grid .col:not(.drink)').hide();
        if($('input[type="checkbox"]:checked#set').length > 0) {
            $('.product-grid .col:not(.Set)').hide();
        }
    });

    $('#dessert').click(function(){
        $('#search').val('');
        foodType = '.dessert';
        $('#findFoodType').text('/ Dessert');
        $('.dessert').show();
        $('.product-grid .col:not(.dessert)').hide();
        if($('input[type="checkbox"]:checked#set').length > 0) {
            $('.product-grid .col:not(.Set)').hide();
        }
    });
    
    $('#healthy').click(function(){
        $('#search').val('');
        foodType = '.health';
        $('#findFoodType').text('/ Healthy');
        $('.health').show();
        $('.product-grid .col:not(.health)').hide();
        if($('input[type="checkbox"]:checked#set').length > 0) {
            $('.product-grid .col:not(.Set)').hide();
        }
    });
    
    $('#fastFood').click(function(){
        $('#search').val('');
        foodType = '.fastFood';
        $('#findFoodType').text('/ Fast Food');
        $('.fastFood').show();
        $('.product-grid .col:not(.fastFood)').hide();
        if($('input[type="checkbox"]:checked#set').length > 0) {
            $('.product-grid .col:not(.Set)').hide();
        }
    });

    $('#highest').click(function(){
        $('#findSort').text('/ Sort by Rated');
        // 获取所有的 .col 元素
        var $cols = $('.col');

        // 使用比较函数对 .col 元素进行排序
        $cols.sort(function(a, b) {
            var ratingA = parseFloat($(a).find('.mb-0.ms-auto.text-secondary').text().substring(0, $(a).find('.mb-0.ms-auto.text-secondary').text().indexOf('(')).trim());
            var ratingB = parseFloat($(b).find('.mb-0.ms-auto.text-secondary').text().substring(0, $(b).find('.mb-0.ms-auto.text-secondary').text().indexOf('(')).trim());
            
            // 按评分的大小进行排序
            // 返回负值表示 a 在 b 之前
            // 返回正值表示 a 在 b 之后
            // 返回零表示 a 和 b 相等
            return ratingB - ratingA;
        });

        // 将排序后的 .col 元素重新插入其父容器
        $cols.each(function() {
            $(this).parent().append(this);
        });
    });

    $('#fastest').click(function(){
        $('#findSort').text('/ Sort by Delivery Speed');
        // 获取所有的 .col 元素
        var $cols = $('.col');

        // 使用比较函数对 .col 元素进行排序
        $cols.sort(function(a, b) {
            var timeA = parseInt($(a).find('.time').text().trim());
            var timeB = parseInt($(b).find('.time').text().trim());
            
            // 按评分的大小进行排序
            // 返回负值表示 a 在 b 之前
            // 返回正值表示 a 在 b 之后
            // 返回零表示 a 和 b 相等
            return timeA - timeB;
        });

        // 将排序后的 .col 元素重新插入其父容器
        $cols.each(function() {
            $(this).parent().append(this);
        });
    });

    $('#set').click(function(){
        $('#search').val('');
        if($('input[type="checkbox"]:checked#set').prop('checked')) {
            $('.product-grid .col:not(.Set)').hide();
        } else {
            $('.product-grid .col').show();
            if(foodType != '')
                $('.product-grid .col:not(' + foodType + ')').hide();
        }
    });

    $('#search').change(function(){
        $('.product-grid .col').show();
        var find = $('#search').val();
        $(".product-grid .col:not(:contains('" + find + "'))").hide();
        if($('input[type="checkbox"]:checked#set').length > 0)
            $('.product-grid .col:not(.Set)').hide();
        if(foodType != '')
            $('.product-grid .col:not(' + foodType + ')').hide();
    });

    $('.address .list-group-item').click(function(){
        $('#location').val($(this).text().trim());
        alert('Delivery Address is update to:\n' + $(this).html().replace(/<br>/g, '\n'));
    });

    $('#Confirm').click(function(){
        $(this).removeClass('btn-danger').addClass('btn-success');
        
    });

    $('#close').click(function(){
        $('#feedback').modal('hide');
        $('#Feedback').text('Feedback');
        $('#status').text('Already Received');
    })

    var rateNum = 0;
    $('#feedback .material-symbols-outlined').mouseenter(function(){

        $('#feedback .material-symbols-outlined').each(function(){
            $(this).removeClass('text-warning').addClass('text-muted');
        });

        $(this).removeClass('text-muted').addClass('text-warning');
        
        $('#feedback .material-symbols-outlined').each(function(){

            if(!$(this).hasClass('text-warning'))
                $(this).removeClass('text-muted').addClass('text-warning');
            else 
                return false;
        });

    }).mouseleave(function(){

        var num = 1;
        $('#feedback .material-symbols-outlined').each(function(){

            if(num <= rateNum)
                $(this).removeClass('text-muted').addClass('text-warning');
            else
                $(this).removeClass('text-warning').addClass('text-muted');

            num++;
        });

    }).click(function(){
        rateNum = 1;
        $('#feedback .material-symbols-outlined').each(function(){
            $(this).removeClass('text-warning').addClass('text-muted');
        });

        $(this).removeClass('text-muted').addClass('text-warning');
        
        $('#feedback .material-symbols-outlined').each(function(){

            if(!$(this).hasClass('text-warning')) {
                $(this).removeClass('text-muted').addClass('text-warning');
                rateNum++;
            }
            else 
                return false;
        });
    });

    $('#submit').click(function(){
        alert('Rate: ' + rateNum + ' Star!\nThank you!');
        $('#order2').hide();
        $('#feedback').modal('hide');
    });
});