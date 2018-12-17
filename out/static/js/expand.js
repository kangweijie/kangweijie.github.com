$(document).ready(function() {
		$('.exp_content').each(function() {
			var outheight = $(this).height();
			// alert(outheight);
			var orderheright = 192;
			var clickOpen = $(this).next('.flexible-tip').find('.uptip');
			var clickClose = $(this).next('.flexible-tip').find('.downtip');

			if (outheight > orderheright) {
				$(this).css({
					'overflow':'hidden',
					'height' : '192px'
				});
				clickOpen.css('display', 'block');
				


			}else{
				clickOpen.css('display', 'none');
			};
			clickOpen.click(function() {
					$('.exp_content').css({'overflow':'auto','height':outheight});
					$(this).css('display', 'none');
					$(this).next('.downtip').css('display', 'block');
				});
			clickClose.click(function() {
				$('.exp_content').css({'overflow':'hidden','height':'192px'});
				$(this).css('display', 'none');
				$(this).prev('.uptip').css('display', 'block');
			});

		});

		$('.rankcitysno').css('display', 'none');

	});