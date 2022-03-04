 <template>
<div>
<p>a: {{ a }}</p >
<p>b: {{ b }}</p >
<p>a + b: {{ plus(a, b) }}</p >
<p>c: {{ c }}</p >
<p>d: {{ d }}</p >
<a-button type="primary" @click="() => { c = c + 1 }">c+1</a-button>
</div>
</template>

<script>
export default {
name: 'Test',

data () {
return {
a: 1,
b: 1,
c: 1
}
},

computed: {
d () {
console.log('I am d.')
return this.a + this.b
}
},

methods: {
plus (a, b) {
console.log('I am a plus b.')
return this.a + this.b
}
}
}
</script>