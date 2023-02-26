<template >

    <breadcrumb active_name="My Wallet"></breadcrumb>
    <div class="row g-4 mb-4">
        <div class="col-sm-6 col-xl-6">
            <div class="card">
              <div class="d-flex align-items-end row">
                <div class="col-7">
                  <div class="card-body text-nowrap">
                    <h5 class="card-title mb-0">Hi, {{auth.name}}! 👋</h5>
                    <p class="mb-2">Welcome to Digital Pharama Gold Coin</p>
                    <!-- <h4 class="text-primary mb-1">Total Current Balance: {{wallet.total}} {{wallet.currency}}</h4> -->

                  </div>
                </div>
                <div class="col-5 text-center text-sm-left">
                  <div class="card-body pb-0 px-0 px-md-4">
                    <img src="/assets/images/card-advance-sale.png" height="140" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3">

            <stat-card heading="Balance" :value="wallet?.balance"
            :total="wallet?.balance" color="success"
            :currency="wallet?.currency"
             subheading="Total Balance"
             icon="ti ti-coin ti-sm"/>
          </div>
        <div class="col-sm-6 col-xl-3">

            <stat-card heading="Money Transfered" :value="0"
            :total="wallet?.balance" color="dark"
            :currency="wallet?.currency"
             subheading="Total Money Transfered"
             icon="ti ti-coin ti-sm"/>
          </div>
          <div class="col-sm-6 col-xl-3">
            <stat-card heading=" Deposit" :value="wallet?.deposit"
            :total="wallet?.balance" color="success"
            :currency="wallet?.currency"
             subheading="Total Deposit"
             icon="ti ti-coin ti-sm"/>
          </div>
          <div class="col-sm-6 col-xl-3">
            <stat-card heading="Withdraw" :value="wallet?.withdraw"
            :total="wallet?.balance" color="danger"
            :currency="wallet?.currency"
             subheading="Total Withdraw"
             icon="ti ti-coin ti-sm"/>
          </div>

          <div class="col-sm-6 col-xl-3">
            <stat-card heading="Exchange" :value="wallet?.exchange"
            :total="wallet?.balance" color="warning"
            :currency="wallet?.currency"
             subheading="Total Exchange"
             icon="ti ti-exchange ti-sm"/>
          </div>
          <div class="col-sm-6 col-xl-3">
            <stat-card heading="Gold Credit" :value="wallet?.gold_credit"
            :total="wallet?.gold_credit" color="warning"
            currency="GM"
             subheading="Total Gold Credit"
             icon="ti ti-exchange ti-sm"/>
          </div>
          
          
    </div>
    <div class="row">
        <div class="col-md-8">
            <div class="card mb-4">
                <!-- Current Plan -->
                <h5 class="card-header">Wallet Account </h5>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-10 mb-1">
                      <div class="mb-3">
                        <h6 class="mb-1">Your Current Plan is Basic</h6>
                        <p>A simple start for everyone</p>
                      </div>
                      <div class="mb-3">
                        <h6 class="mb-1">Actived Date {{$filters.DateFormat(auth.created_at)}}</h6>
                        <p>We will send you a notification upon Subscription expiration</p>
                      </div>
                      <div class="mb-3">
                        <h6 class="mb-1"><span class="me-2">Universal Wallet ID</span> <span class="badge bg-label-primary">ID</span></h6>
                        <input type="text" :value="auth.uid" class="form-control copytoken" id="tokeniput" disabled placeholder="Universal Wallet ID">
                      </div>
                    </div>

                    <div class="col-12">
                      <button @click="copy" class="btn btn-success me-2 mt-2 waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#pricingModal">Copy Wallet ID</button>

                    </div>
                  </div>
                </div>


                <!-- /Current Plan -->
              </div>
        </div>
        <div class="col-xl-4 col-md-6 order-2 order-lg-1">
            <div class="card">
              <div class="card-header d-flex justify-content-between">
                <div class="card-title mb-0">
                  <h5 class="mb-0">Your Wallets</h5>
                  <small class="text-muted">Latest</small>
                </div>

              </div>
              <div class="card-body" style="overflow-x: hidden;
              overflow-y: scroll;
              height: 260px;">
                <ul class="list-unstyled mb-0">
                    <li class="mb-3 pb-1"  v-if="recent_transactions.length<1">
                        <div class="alert alert-warning" role="alert">
                             unavailable any wallet transitions
                          </div>
                    </li>
                  <li class="mb-3 pb-1" v-else v-for="item in recent_transactions" :key="item">
                    <div class="d-flex align-items-start">
                      <div class="badge bg-label-secondary p-2 me-3 rounded"><i class="ti ti-coin ti-sm"></i></div>
                      <div class="d-flex justify-content-between w-100 flex-wrap gap-2">
                        <div class="me-2">
                          <h6 class="mb-0">Direct Source</h6>
                          <small class="text-muted">Direct link click</small>
                        </div>
                        <div class="d-flex align-items-center">
                          <p class="mb-0">1.2k</p>
                          <div class="ms-3 badge bg-label-success">+4.2%</div>
                        </div>
                      </div>
                    </div>
                  </li>

                </ul>
              </div>
            </div>
          </div>
    </div>

</template>
<script>
import breadcrumb from "../../components/BreadcrumbComponent.vue";
import SearchBox from "../../components/SearchBoxComponent.vue";
import StatCard from "../../components/StatCardComponent.vue";
export default {
    components:{breadcrumb,StatCard},
    data:()=>({
        auth:user,
        wallet:user?.wallet,
        recent_transactions:[],
    }),
    methods:{
      
        copy() {
            const textArea = document.createElement("textarea");
              textArea.value = this.auth.uid;
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              try {
                document.execCommand('copy');
                const mesg={message:"Wallet ID Copied: "+this.auth.uid}
                this.$root.alertNotify(200, null, "success", mesg);
              } catch (err) {
                console.error('Unable to copy to clipboard', err);
              }
              document.body.removeChild(textArea);
                }
    }
}
</script>
<style lang="">

</style>
