<template>
  <div>
    <h5>
      <select @change="control($event)" name="" id="" v-model="dis" >
        <option value="disable">Auto control</option>
        <option value="enable">Manual control</option>
      </select>
    </h5>
    <div class="d-flex justify-content-between flex-wrap mt-5 align-items-center gap-3">
      <div class="cart border p-3" v-for="(item, index) in device" :key="index">
        <div class="d-flex justify-content-between">
          <div>
            {{ item[0][0] }}
          </div>
          <div>
            <label class="switch" >
              <input type="checkbox" @click="postData(item[1][0], item[0][0])" :disabled="dis == 'disable'" :checked="checkItem(item[1][0])" />
              <span class="slider"></span>
            </label>
          </div>
        </div>
        <div class="mt-5">
          <button @click="postData(item[1][0], item[0][0])">{{ checkItem(item[1][0]) ? 'Turn off' : 'Turn on' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from '../firebase'
export default {
  name: "Control",
  data() {
    return {
      dis : 'disable'
    }
  },
  computed: {
    device() {
      return this.$store.state.device;
    },
  },
  methods: {
    checkItem(item) {
        if(item === 'OFF') {
            return false
        } else {
            return true
        }
    },
    control(e) {
      if(e.target.value == 'disable') {
        db.ref('DEVICE').update({
          'CONTROL' : 'v'
        })
      } else {
          db.ref('DEVICE').update({
          'CONTROL' : 'n'
        })
      }
    },
    postData(c, item) {
      if(this.dis == 'disable') {
        return 
      } else {
        let it = item
        const check = c === 'OFF' ? 'ON' : 'OFF';
        db.ref('DEVICE').update({
        [it] : check
        })
      }
        
        
    }
  }
};
</script>

<style lang="scss" scoped>
select {
  outline:  none;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 5px;
}
.cart {
  flex: 0.25;
  padding: 1.5rem;
  @media (max-width : 991.9px) {
    flex: unset;
      width: calc( 50% - 0.5rem);
  }
  @media (max-width : 450.9px) {
      width: 100%;
  }
  button {
    background-color: #5c60f5;
    color: white;
    border: none !important;
    cursor: pointer;
    padding: 10px 15px;
    transition: 0.3s;
    border-radius: 30px;
    &:hover {
      background-color: #494ff4;
    }
  }
}
.switch {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 30px;
}
.slider {
  position: absolute;
  background: #ccc;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.4s;
  border-radius: 25px;
  &:before {
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 5px;
    bottom: 5px;
    background: white;
    transition: 0.4s;
  }
}
.switch input {
    display: none;
}
input:checked + .slider {
  background: rgb(67, 164, 233);
}
input:checked + .slider:before {
  transform: translateX(40px);
}
</style>