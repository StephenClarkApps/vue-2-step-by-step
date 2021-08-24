Vue.component('modal', {

  template: `
    		<div class="modal is-active">
    			<div class = "modal-background"></div>
    			<div class = "modal-content">
    				<div class="box">
    					<p>
    						Baby baby, why can't we just be together. Yeah e yeah e yeah.
    					</p>
    				</div>
    			</div>

          <button class="modal-close"></button>
    		</div>
  `

});

new Vue({
    el: '#root'
})
