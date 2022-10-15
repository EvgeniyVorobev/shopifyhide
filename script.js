document.body.innerHTML += `<style>
    .section.section--billing-address {
        display:none!important;
    }
</style>
`;
    setInterval(function () {
        document.getElementById('checkout_billing_address_zip').value = 65025
        document.getElementById('checkout_billing_address_address1').value = 'Unset';
        document.getElementById('billing family-name').value = 'Unset';
    },1000)
