$(function() {
        var ingrdDiv = $('#p_ingrd');
        var i = $('#p_ingrd p').size() + 1;
        
        $('#addIngrd').on('click', function() {
                var removeLink = $('<a href="#" class="remIngrd pull-right">Remove Ingredient</a>');
                var newIngredientParagraph = $('<p><select name="type"><option value="insect">Insect</option><option value="veggie">Vegetable</option><option value="condiment">Condiment</option><option value="other">Other</option></select><br><label>Name:<input type="text" name="ingredient"></input></label><label>Amount:<input type="text" name="amount"></input></label></p>')
                
                removeLink.appendTo(newIngredientParagraph)

                newIngredientParagraph.appendTo(ingrdDiv);
                i++;

                $(removeLink).on('click', function() { 
                console.log(this);
                if( i > 2 ) {

                        $(this).parents('p').remove();
                        i--;
                }
                        return false;
                });
        });
});



$(function() {
        var stepDiv = $('#directions');
        var i = $('#directions p').size() + 1;
        var e = 2;
        
        $('#addStep').on('click', function() {
                var eStep = "Step: " + e;
                var removeStep = $('<a href="#" class="remStep pull-right">Remove Step</a>');
                var newStepParagraph = $('<span><h5>'+ eStep +'</h5><p><textarea name="step" rows="2" cols="50"></textarea></p></span>')
                removeStep.appendTo(newStepParagraph);
                newStepParagraph.appendTo(stepDiv);
                e++;
                i++;

                $(removeStep).on('click', function() { 
                console.log(this);
                if( i > 2 ) {

                        $(this).parents('span').remove();
                        i--;
                }
                        return false;
                });
        });
});