$(document).ready(function(){
	$('#my_button').click(function(){
		let my_url = $('#my_url').val();
		let my_div = $('#my_id_div');
		let my_data = 'ASD';
		console.log(my_url);
		console.log('asdasdsa');
		json(my_url,my_data,my_div);
	});
	
	function json(my_url,my_data,my_div){
		let my_table = $('<table border = "1"></table>');
		let my_td_fn = $('<td>');
		let my_td_ini = '<td>';
		let my_td_end = '</td>';
		let my_tr_fn = $('tr');
		let my_tr = ''
		let my_tr_ini = '<tr>';
		let my_tr_end = '</tr>';
		let my_tr_values_fn = '<tr>';
		console.log(my_div);
		console.log(my_tr_fn);
		console.log(my_tr_values_fn);
		$.getJSON(my_url,my_data,function(data,status,xhr){
//			console.log(data);
//			console.log(status);
//			console.log(xhr);
			
			//LENGTH
			let i = 0;
			let length ;
			let data_length;
			let my_keys_string='';
			let my_values_string = '';
			length = typeof (data[i]);
			console.log(length);	

			for(i=0; length === 'object'; i++){
				length = typeof (data[i]);
				console.log(length);
			}
			data_length = i-1;
			console.log(data_length);
			

			//KEYS
			let my_keys;
			for(i=0;i<data_length;i++){
				my_keys = Object.keys(data[0])[i];
//				console.log(my_keys);
				my_keys_string = my_keys_string.concat((my_td_ini).concat(my_keys).concat(my_td_end));
//				my_keys_string = my_keys_string.concat(my_td_full);
			}
			console.log(my_keys_string);
				my_tr_fn.append(my_keys_string); 	console.log(my_tr_fn[0]);
				my_table.append(my_tr_fn);			console.log(my_table[0]);
				my_div.append(my_table);
				
				
			//VALUES
			let my_values;
			for(i=0;i<data_length;i++){
				for(j=0;j<data_length;j++){
				my_values = Object.values(data[i])[j];
				my_values_string = my_values_string.concat((my_td_ini).concat(my_values).concat(my_td_end));
			}
				my_tr = my_tr.concat(my_tr_ini.concat(my_values_string).concat(my_tr_end));
				console.log(my_tr);
				my_values_string = '';
			}
				my_table.append(my_tr);
				my_div.append(my_table);


		});
	}				
});