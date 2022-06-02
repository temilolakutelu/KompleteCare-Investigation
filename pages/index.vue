<template>
  <div class="d-flex">
    <Menu />
    <div id="main">
      <header class="mt-4">
        <ul class="d-flex justify-content-end m-4">
          <li class="nav-link nav-text my-auto">Take a tour</li>
          <li class="nav-link my-auto"><img src="/icons/notification.png" alt=""></li>
          <li class="nav-link my-auto"><img src="/icons/bell.png" alt=""></li>
          <li class="nav-link my-auto"><img src="/icons/demo.png" alt=""></li>
        </ul>
      </header>
      <section class="">
        <div class="section-head">
          <h2>
            Update Patient Medical Record
          </h2>
          <p>Click the tabs to view and edit patient medical details</p>
        </div>
        <div class="card mt-5">
          <div>
            <h4>X-Ray</h4>
            <form>
              <div class="form-row">
                <div v-for="(row, ix) in xray_list" :key="ix" class="form-group col-sm-3 form-check mt-3">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" v-model="formdata"
                    :value="row.id">
                  <label class="form-check-label ml-1" for="inlineCheckbox1">row.title</label>
                </div>


              </div>
            </form>
          </div>
          <hr class="divider">
          <div>
            <h4>Ultrasound Scan</h4>
            <form>
              <div class="form-row">
                <div v-for="(row, ix) in ultrasound_list" :key="ix" class="form-group col-sm-3 form-check mt-3">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" v-model="formdata"
                    :value="row.id">
                  <label class="form-check-label ml-1" for="inlineCheckbox1">row.title</label>
                </div>
              </div>
            </form>
          </div>
          <hr class="divider">

          <form id="scan" class="mt-3 ">
            <div class="d-flex justify-content-between flex-wrap">
              <div class="form-group ">
                <label for="">CT Scan</label>
                <select class="form-control" name="" id="">
                  <option value="" selected>*Specify</option>
                </select>
              </div>
              <div class="form-group ">
                <label for="">MRI</label>
                <select class="form-control" name="" id="">
                  <option value="" selected>*Specify</option>
                </select>
              </div>
            </div>
          </form>
          <div class="mt-5">
            <button class="submit-btn" @click.prevent="handleSubmit" type="submit">Save and Send</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      token: '',
      xray_list: [],
      ultrasound_list: [],
      patient: '',
      ctscan: '',
      mri: '',
      formdata: []
    }
  },
  mounted () {

    this.handleLogin()
    // this.getList()
  },
  methods: {
    async handleLogin () {
      let vm = this;
      const data = {
        email: "tester@kompletecare.com",
        password: "password"
      };
      await this.$axios.post('/login', data)
        .then(res => {
          console.log(res.data.data)
          vm.token = res.data.data.token;
          vm.getList();
        }).catch(err => {
          console.log(err)
        })
    },
    getList () {

      let vm = this;
      this.$axios.get('/investigations', {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      }).then(res => {
        console.log(res)
        res.data.data.forEach(i => {
          if (i.id === 1) {
            vm.xray_list = i
          }
          else {
            vm.ultrasound_list = i
          }
        })
      }).catch(err => {
        console.log(err)
      })
    },
    handleSubmit () {
      let config = {
        header: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        }
      }
      let data = new FormData();
      this.formdata.forEach((i, index) => {
        data.append(`investigations[${index}]`, i)
      })
      data.append('ctscan', this.ctscan);
      data.append('mri', this.mri);
      data.append('developer', 'Developer');

      this.$axios.post('/investigations', data, config)
        .then(res => {
          console.log(res)
          this.$swal('Success!',
            'Your Submission is successful',
            'success')
        }).catch(err => {
          this.$swal('Oops!',
            err,
            'error')
        })
    }
  }
}
</script>
