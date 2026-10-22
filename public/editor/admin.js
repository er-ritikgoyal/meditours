// AlisPro MediTours content editor — small progressive enhancements.
(function () {
	// Repeaters (sub-treatments, FAQs, education…): add, remove, reorder rows.
	document.querySelectorAll('[data-repeater]').forEach(function (rep) {
		var rows = rep.querySelector('.repeater-rows');
		var tpl = rep.querySelector('template');
		var counter = rows.children.length + 1000;

		rep.querySelector('[data-repeater-add]').addEventListener('click', function () {
			var html = tpl.innerHTML.replace(/__INDEX__/g, String(counter++));
			rows.insertAdjacentHTML('beforeend', html);
			var first = rows.lastElementChild.querySelector('input, textarea');
			if (first) first.focus();
		});

		rows.addEventListener('click', function (e) {
			var btn = e.target.closest('button');
			if (!btn) return;
			var row = btn.closest('.repeater-row');
			if (btn.hasAttribute('data-repeater-remove')) {
				if (confirm('Remove this row?')) row.remove();
			} else if (btn.hasAttribute('data-repeater-up') && row.previousElementSibling) {
				row.parentNode.insertBefore(row, row.previousElementSibling);
			} else if (btn.hasAttribute('data-repeater-down') && row.nextElementSibling) {
				row.parentNode.insertBefore(row.nextElementSibling, row);
			}
		});
	});

	// New items: fill the URL slug from the title until the editor types their own.
	document.querySelectorAll('[data-slug-from]').forEach(function (slugInput) {
		var source = document.querySelector('[name="' + slugInput.getAttribute('data-slug-from') + '"]');
		if (!source) return;
		var touched = slugInput.value !== '';
		var toSlug = function (s) {
			return s.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
		};
		slugInput.addEventListener('input', function () { touched = true; });
		source.addEventListener('input', function () { if (!touched) slugInput.value = toSlug(source.value); });
	});

	// Image preview before upload.
	document.querySelectorAll('input[type=file][data-preview]').forEach(function (input) {
		input.addEventListener('change', function () {
			var img = input.parentNode.querySelector('.image-preview');
			if (!img || !input.files || !input.files[0]) return;
			img.src = URL.createObjectURL(input.files[0]);
			img.hidden = false;
		});
	});

	// Confirm destructive actions.
	document.querySelectorAll('form[data-confirm]').forEach(function (form) {
		form.addEventListener('submit', function (e) {
			if (!confirm(form.getAttribute('data-confirm'))) e.preventDefault();
		});
	});

	// Filter the list as you type.
	var filter = document.querySelector('[data-list-filter]');
	if (filter) {
		var rowsList = document.querySelectorAll('[data-list] tbody tr');
		filter.addEventListener('input', function () {
			var q = filter.value.trim().toLowerCase();
			rowsList.forEach(function (tr) {
				tr.style.display = !q || tr.textContent.toLowerCase().indexOf(q) !== -1 ? '' : 'none';
			});
		});
	}

	// Warn before leaving a form with unsaved changes.
	var form = document.querySelector('.edit-form');
	if (form) {
		var dirty = false;
		form.addEventListener('input', function () { dirty = true; });
		form.addEventListener('submit', function () { dirty = false; });
		window.addEventListener('beforeunload', function (e) {
			if (dirty) { e.preventDefault(); e.returnValue = ''; }
		});
	}
})();
