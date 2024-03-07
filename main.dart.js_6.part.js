((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_6",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
b2Z(d,e,f,g){return new C.aCd(!0,!0,!0,d,B.M([null,0],y.X,y.p))},
aCd:function aCd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.f=g
_.r=h},
HZ:function HZ(d,e,f){this.c=d
this.d=e
this.a=f},
I1:function I1(d){this.a=d
this.b=0},
abe:function abe(){},
zi:function zi(d){this.b=d},
G_:function G_(d){this.c=d},
a_S(d,e){var x,w,v=d.length,u=0
while(!0){if(!(u<v&&d[u]===0))break;++u}v-=u
x=new Uint8Array(v+e)
for(w=0;w<v;++w)x[w]=d[w+u]
return new C.axT(x)},
axT:function axT(d){this.a=d},
b2l(d,e){var x=B.a([],y.v)
B.a_V(d,1,40,"typeNumber")
C.bh7(e,A.Ui,"errorCorrectLevel",null)
return new C.axQ(d,e,d*4+17,x)},
bh3(d,e){var x,w,v,u,t,s,r,q
for(x=y.t,w=1;w<40;++w){v=C.b2n(w,d)
u=new C.I1(B.a([],x))
for(t=v.length,s=0,r=0;r<t;++r)s+=v[r].b
for(r=0;r<1;++r){q=e[r]
u.n2(0,4,4)
u.n2(0,q.b.length,C.b5U(4,w))
q.oX(0,u)}if(u.b<=s*8)break}return w},
b5k(d,e,f){var x,w,v,u,t,s,r,q=C.b2n(d,e),p=new C.I1(B.a([],y.t))
for(x=0;x<f.length;++x){w=f[x]
p.n2(0,4,4)
p.n2(0,w.b.length,C.b5U(4,d))
w.oX(0,p)}for(v=q.length,u=0,x=0;x<v;++x)u+=q[x].b
t=u*8
v=p.b
if(v>t)throw B.d(new C.G_("Input too long. "+v+" > "+t))
if(v+4<=t)p.n2(0,0,4)
for(;D.e.bN(p.b,8)!==0;)p.a3m(!1)
for(s=0;!0;s=r){if(p.b>=t)break
r=s+1
p.n2(0,(s&1)===0?236:17,8)}return C.bmw(p,q)},
bmw(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=y.T,g=B.aS(e.length,null,!1,h),f=B.aS(e.length,null,!1,h)
for(h=d.a,x=0,w=0,v=0,u=0;u<e.length;++u){t=e[u]
s=t.b
r=t.a-s
w=Math.max(w,s)
v=Math.max(v,r)
q=new Uint8Array(s)
g[u]=q
for(p=0;p<s;++p)q[p]=h[p+x]&255
x+=s
o=C.bmS(r)
t=o.a.length-1
n=C.a_S(q,t).a2p(o)
m=new Uint8Array(t)
f[u]=m
for(l=n.a,k=l.length,p=0;p<t;++p){j=p+k-t
m[p]=j>=0?l[j]:0}}i=B.a([],y.t)
for(p=0;p<w;++p)for(u=0;u<e.length;++u){h=g[u]
if(p<h.length)i.push(h[p])}for(p=0;p<v;++p)for(u=0;u<e.length;++u){h=f[u]
if(p<h.length)i.push(h[p])}return i},
b5U(d,e){var x=null
if(1<=e&&e<10)switch(d){case 1:return 10
case 2:return 9
case 4:return 8
case 8:return 8
default:throw B.d(B.bo("mode:"+d,x))}else if(e<27)switch(d){case 1:return 12
case 2:return 11
case 4:return 16
case 8:return 10
default:throw B.d(B.bo("mode:"+d,x))}else if(e<41)switch(d){case 1:return 14
case 2:return 13
case 4:return 16
case 8:return 12
default:throw B.d(B.bo("mode:"+d,x))}else throw B.d(B.bo("type:"+e,x))},
bmS(d){var x,w=y.t,v=C.a_S(B.a([1],w),0)
for(x=0;x<d;++x)v=v.du(0,C.a_S(B.a([1,C.aYg(x)],w),0))
return v},
axQ:function axQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=null
_.e=g},
bh4(d){var x,w,v,u,t,s,r,q,p,o,n
for(x=y.Q,w=d.c,v=d.a,u=d.b,t=d.e,s=0,r=null,q=0;q<8;++q){p=new C.a_R(w,v,u,q,B.a([],x))
o=d.d
p.UK(q,o==null?d.d=C.b5k(v,u,t):o,!0)
n=C.bnO(p)
if(q===0||s>n){r=p
s=n}}t=r.d
x=new C.a_R(w,v,u,t,B.a([],x))
x.UK(t,d.gavx(),!1)
return x},
bnR(d,e,f){var x
switch(d){case 0:return(e+f&1)===0
case 1:return(e&1)===0
case 2:return D.e.bN(f,3)===0
case 3:return D.e.bN(e+f,3)===0
case 4:return(D.e.cR(e,2)+D.e.cR(f,3)&1)===0
case 5:x=e*f
return D.e.bN(x,2)+D.e.bN(x,3)===0
case 6:x=e*f
return(D.e.bN(x,2)+D.e.bN(x,3)&1)===0
case 7:return(D.e.bN(e*f,3)+D.e.bN(e+f,2)&1)===0
default:throw B.d(B.bo("bad maskPattern:"+d,null))}},
bnO(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
for(x=0,w=0;w<k;++w)for(v=0;v<k;++v){u=d.ex(w,v)
for(t=0,s=-1;s<=1;++s){r=w+s
if(r<0||k<=r)continue
for(q=s===0,p=-1;p<=1;++p){o=v+p
if(o<0||k<=o)continue
if(q&&p===0)continue
if(u===d.ex(r,o))++t}}if(t>5)x+=3+t-5}for(r=k-1,w=0;w<r;w=n)for(n=w+1,v=0;v<r;){m=d.ex(w,v)?1:0
if(d.ex(n,v))++m;++v
if(d.ex(w,v))++m
if(d.ex(n,v))++m
if(m===0||m===4)x+=3}for(r=k-6,w=0;w<k;++w)for(v=0;v<r;++v)if(d.ex(w,v)&&!d.ex(w,v+1)&&d.ex(w,v+2)&&d.ex(w,v+3)&&d.ex(w,v+4)&&!d.ex(w,v+5)&&d.ex(w,v+6))x+=40
for(v=0;v<k;++v)for(w=0;w<r;++w)if(d.ex(w,v)&&!d.ex(w+1,v)&&d.ex(w+2,v)&&d.ex(w+3,v)&&d.ex(w+4,v)&&!d.ex(w+5,v)&&d.ex(w+6,v))x+=40
for(v=0,l=0;v<k;++v)for(w=0;w<k;++w)if(d.ex(w,v))++l
return x+Math.abs(100*l/k/k-50)/5*10},
a_R:function a_R(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b2n(d,e){var x,w,v,u,t,s,r=C.bnn(d,e),q=r.length/3|0,p=B.a([],y.J)
for(x=0;x<q;++x){w=x*3
v=r[w]
u=r[w+1]
t=r[w+2]
for(s=0;s<v;++s)p.push(new C.a_T(u,t))}return p},
bnn(d,e){switch(e){case 1:return A.jd[(d-1)*4]
case 0:return A.jd[(d-1)*4+1]
case 3:return A.jd[(d-1)*4+2]
case 2:return A.jd[(d-1)*4+3]
default:throw B.d(B.bo("bad rs block @ typeNumber: "+d+"/errorCorrectLevel:"+e,null))}},
a_T:function a_T(d,e){this.a=d
this.b=e},
avu:function avu(d,e){this.a=d
this.b=e},
I2:function I2(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.f=e
_.r=f
_.w=g
_.x=h
_.as=i
_.at=j
_.a=k},
abf:function abf(d){var _=this
_.d=null
_.f=_.e=$
_.a=null
_.b=d
_.c=null},
aNQ:function aNQ(d){this.a=d},
aNP:function aNP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aNN:function aNN(d,e,f){this.a=d
this.b=e
this.c=f},
aNO:function aNO(d,e,f){this.a=d
this.b=e
this.c=f},
Na:function Na(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
I3:function I3(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.z=_.y=$
_.as=l
_.at=m
_.a=n},
aNc:function aNc(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=$},
vf:function vf(d,e){this.a=d
this.b=e},
xH:function xH(d,e){this.a=d
this.b=e},
axS:function axS(d,e){this.a=d
this.b=e},
axR:function axR(d,e){this.a=d
this.b=e},
a_Q:function a_Q(){},
a_O:function a_O(){},
a_P:function a_P(){},
bh5(d,e,f){var x,w,v,u,t,s=B.b2("qrCode")
try{if(f!==-1){s.sd1(C.b2l(f,e))
v=s.aH()
u=D.cB.cE(d)
v.e.push(new C.zi(u))
v.d=null}else{v=C.b2l(C.bh3(e,B.a([new C.zi(D.cB.cE(d))],y.v)),e)
v.e.push(new C.zi(D.cB.cE(d)))
v.d=null
s.sd1(v)}v=s.aH()
return new C.I4(A.oa,v,null)}catch(t){v=B.ac(t)
if(v instanceof C.G_){x=v
return new C.I4(A.ak1,null,x)}else if(y.L.b(v)){w=v
return new C.I4(A.ak2,null,w)}else throw t}},
I4:function I4(d,e,f){this.a=d
this.b=e
this.c=f},
I5:function I5(d,e){this.a=d
this.b=e},
bh7(d,e,f,g){return B.arJ(d,g==null?J.bs(e):g,e,null,f)},
b7c(d){if(d<1)throw B.d(B.bo("glog("+d+")",null))
return $.aUC()[d]},
aYg(d){for(;d<0;)d+=255
for(;d>=256;)d-=255
return $.aZ5()[d]},
bmx(){var x,w=new Uint8Array(256)
for(x=0;x<8;++x)w[x]=D.e.WF(1,x)
for(x=8;x<256;++x)w[x]=w[x-4]^w[x-5]^w[x-6]^w[x-8]
return w},
bmy(){var x,w=new Uint8Array(256)
for(x=0;x<255;++x)w[$.aZ5()[x]]=x
return w},
boM(d){var x,w=d<<10>>>0
for(x=w;C.wz(x)-C.wz(1335)>=0;)x=(x^D.e.FX(1335,C.wz(x)-C.wz(1335)))>>>0
return((w|x)^21522)>>>0},
boN(d){var x,w=d<<12>>>0
for(x=w;C.wz(x)-C.wz(7973)>=0;)x=(x^D.e.FX(7973,C.wz(x)-C.wz(7973)))>>>0
return(w|x)>>>0},
wz(d){var x
for(x=0;d!==0;){++x
d=d>>>1}return x}},J,E,B,D,A
C=a.updateHolder(c[20],C)
J=c[1]
E=c[22]
B=c[0]
D=c[2]
A=c[38]
C.aCd.prototype={
agg(d){var x,w,v,u=null,t=this.r
if(!t.a8(0,d)){x=t.i(0,u)
x.toString
for(w=this.f,v=x;v<w.length;){x=w[v].a
if(x!=null)t.l(0,x,v)
if(J.f(x,d)){t.l(0,u,v+1)
return v}++v}t.l(0,u,v)}else return t.i(0,d)
return u},
a0z(d){return this.agg(d instanceof E.BX?d.a:d)},
jX(d,e){var x,w,v,u,t=null
if(e<0||e>=this.f.length)return t
x=this.f[e]
w=x.a
v=w!=null?new E.BX(w):t
x=new B.ir(x,t)
u=E.aXO(x,e)
x=u!=null?new E.FI(u,x,t):x
return new B.j_(new E.wP(new E.BZ(x,t),t),v)},
gtV(){return this.f.length},
Po(d){return this.f!==d.f}}
C.HZ.prototype={
v(d){var x=null
return B.aK(x,new C.I2(this.c,-1,3,D.ad,this.d,A.M7,A.Ot,x),D.k,x,x,x,x,x,x,x,A.Rz,x,x,x)}}
C.I1.prototype={
l(d,e,f){return B.V(B.a4("cannot change"))},
i(d,e){return(D.e.JC(this.a[D.e.cR(e,8)],7-D.e.bN(e,8))&1)===1},
gt(d){return this.b},
st(d,e){B.V(B.a4("Cannot change"))},
n2(d,e,f){var x
for(x=0;x<f;++x)this.a3m((D.e.a76(e,f-x-1)&1)===1)},
a3m(d){var x=this,w=D.e.cR(x.b,8),v=x.a
if(v.length<=w)v.push(0)
if(d)v[w]=v[w]|D.e.nN(128,D.e.bN(x.b,8));++x.b},
$ia9:1,
$in:1,
$iy:1}
C.abe.prototype={}
C.zi.prototype={
gt(d){return this.b.length},
oX(d,e){var x,w,v
for(x=this.b,w=x.length,v=0;v<w;++v)e.n2(0,x[v],8)},
$ib2m:1}
C.G_.prototype={
j(d){return"QrInputTooLongException: "+this.c},
$ic8:1}
C.axT.prototype={
i(d,e){return this.a[e]},
gt(d){return this.a.length},
du(d,e){var x,w,v,u,t,s,r,q=this.a,p=q.length,o=e.a,n=o.length,m=new Uint8Array(p+n-1)
for(x=0;x<p;++x)for(w=0;w<n;++w){v=x+w
u=m[v]
t=q[x]
if(t<1)B.V(B.bo("glog("+t+")",null))
s=$.aUC()
t=s[t]
r=o[w]
if(r<1)B.V(B.bo("glog("+r+")",null))
m[v]=(u^C.aYg(t+s[r]))>>>0}return C.a_S(m,0)},
a2p(d){var x,w,v,u=this.a,t=u.length,s=d.a,r=s.length
if(t-r<0)return this
x=C.b7c(u[0])-C.b7c(s[0])
w=new Uint8Array(t)
for(v=0;v<t;++v)w[v]=u[v]
for(v=0;v<r;++v){u=w[v]
t=s[v]
if(t<1)B.V(B.bo("glog("+t+")",null))
w[v]=(u^C.aYg($.aUC()[t]+x))>>>0}return C.a_S(w,0).a2p(d)}}
C.axQ.prototype={
gavx(){var x=this,w=x.d
return w==null?x.d=C.b5k(x.a,x.b,x.e):w}}
C.a_R.prototype={
aox(){var x,w,v,u=this.e
D.b.X(u)
for(x=this.a,w=y.u,v=0;v<x;++v)u.push(B.aS(x,null,!1,w))},
ex(d,e){var x
if(d>=0){x=this.a
x=x<=d||e<0||x<=e}else x=!0
if(x)throw B.d(B.bo(""+d+" , "+e,null))
x=this.e[d][e]
x.toString
return x},
UK(d,e,f){var x,w=this
w.aox()
w.Jy(0,0)
x=w.a-7
w.Jy(x,0)
w.Jy(0,x)
w.apG()
w.apH()
w.apI(d,f)
if(w.b>=7)w.apJ(f)
w.aln(e,d)},
Jy(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
for(x=this.e,w=this.a,v=-1;v<=7;++v){u=d+v
if(u<=-1||w<=u)continue
for(t=0<=v,s=v<=6,r=v!==0,q=v===6,p=2<=v,o=v<=4,n=-1;n<=7;++n){m=e+n
if(m<=-1||w<=m)continue
if(t)if(s)l=n===0||n===6
else l=!1
else l=!1
if(!l){if(0<=n)if(n<=6)l=!r||q
else l=!1
else l=!1
if(!l)l=p&&o&&2<=n&&n<=4
else l=!0}else l=!0
if(l)x[u][m]=!0
else x[u][m]=!1}}},
apG(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.a3L[this.b-1]
for(x=j.length,w=this.e,v=0;v<x;++v)for(u=0;u<x;++u){t=j[v]
s=j[u]
if(w[t][s]!=null)continue
for(r=-2;r<=2;++r)for(q=t+r,p=r!==-2,o=r!==2,n=r===0,m=-2;m<=2;++m){if(p)if(o)if(m!==-2)if(m!==2)l=n&&m===0
else l=!0
else l=!0
else l=!0
else l=!0
k=s+m
if(l)w[q][k]=!0
else w[q][k]=!1}}},
apH(){var x,w,v,u,t
for(x=this.a-8,w=this.e,v=8;v<x;++v){u=w[v]
if(u[6]!=null)continue
u[6]=(v&1)===0}for(t=8;t<x;++t){u=w[6]
if(u[t]!=null)continue
u[t]=(t&1)===0}},
apI(d,e){var x,w,v,u,t,s,r=C.boM((this.c<<3|d)>>>0)
for(x=this.e,w=this.a,v=w-15,u=!e,t=0;t<15;++t){s=u&&(D.e.nN(r,t)&1)===1
if(t<6)x[t][8]=s
else if(t<8)x[t+1][8]=s
else x[v+t][8]=s}for(t=0;t<15;++t){s=u&&(D.e.nN(r,t)&1)===1
if(t<8)x[8][w-t-1]=s
else{v=15-t-1
if(t<9)x[8][v+1]=s
else x[8][v]=s}}x[w-8][8]=u},
apJ(d){var x,w,v,u,t,s=C.boN(this.b)
for(x=this.e,w=this.a,v=!d,u=0;u<18;++u){t=v&&(D.e.nN(s,u)&1)===1
x[D.e.cR(u,3)][D.e.bN(u,3)+w-8-3]=t}for(u=0;u<18;++u){t=v&&(D.e.nN(s,u)&1)===1
x[D.e.bN(u,3)+w-8-3][D.e.cR(u,3)]=t}},
aln(d,e){var x,w,v,u,t,s,r,q,p,o=this.a,n=o-1
for(x=this.e,w=n,v=-1,u=7,t=0;w>0;w-=2){if(w===6)--w
for(;!0;){for(s=0;s<2;++s){r=w-s
if(x[n][r]==null){q=t<d.length&&(D.e.JC(d[t],u)&1)===1
if(C.bnR(e,n,r))q=!q
x[n][r]=q;--u
if(u===-1){++t
u=7}}}n+=v
if(n<0||o<=n){n-=v
p=-v
v=p
break}}}}}
C.a_T.prototype={}
C.avu.prototype={
Ry(d,e){var x=e!=null?e.I():"any"
return d.j(0)+":"+x},
atA(d,e,f,g){if(f===A.k3)this.a.push(e)
else this.b.l(0,this.Ry(f,g),e)},
Zl(d,e,f){return this.atA(d,e,f,null)},
Ds(d,e){return d===A.k3?D.b.gN(this.a):this.b.i(0,this.Ry(d,e))},
ax4(d){return this.Ds(d,null)}}
C.I2.prototype={
ad(){return new C.abf(D.m)}}
C.abf.prototype={
v(d){var x=this,w=x.a,v=w.c,u=w.f
u=x.e=C.bh5(v,w.r,u)
x.d=u.a===A.oa?u.b:null
return new B.eS(new C.aNQ(x),null)},
VA(d,e){var x,w,v=null,u=this.d
u.toString
x=u.a
w=new C.I3(x,u.b,!0,d,this.a.at,A.Ou,A.Os,u,new C.avu(B.a([],y.H),B.x(y.N,y.Z)),v,v)
w.z=x
w.akx()
return new C.Na(e,D.U,this.a.w,B.l9(v,v,v,w,D.K),"qr code",v)},
afW(d,e,f){var x,w=null,v=this.a
v.toString
x=B.aK(w,w,D.k,w,w,w,w,w,w,w,w,w,w,w)
return new C.Na(v.x,D.U,v.w,x,"qr code",w)},
alf(d,e){var x=this,w=null,v=B.bL(d,w,y.w).w,u=new B.ao($.aw,y.g),t=new B.b7(u,y.O),s=x.a.as.a2(new B.y9(w,v.b,w,w,w,w)),r=new B.hg(new C.aNN(x,s,t),w,new C.aNO(x,s,t))
x.f=r
s.a5(0,r)
return u}}
C.Na.prototype={
v(d){var x=this,w=null,v=x.c
return B.cT(w,B.aK(w,new B.bb(x.e,x.f,w),D.k,x.d,w,w,w,v,w,w,w,w,w,v),!1,w,!1,!1,w,w,w,w,x.r,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)}}
C.I3.prototype={
akx(){var x,w,v,u,t,s,r
this.y=C.bh4(this.x)
x=this.as
w=$.ax()
v=w.bk()
v.sbS(0,D.aU)
x.Zl(0,v,A.k3)
v=w.bk()
v.sbS(0,D.aU)
x.Zl(0,v,A.ajZ)
for(u=0;u<3;++u){t=A.a48[u]
v=w.bk()
v.sbS(0,D.ai)
s=x.b
r=t.I()
s.l(0,A.IX.j(0)+":"+r,v)
v=w.bk()
v.sbS(0,D.ai)
r=t.I()
s.l(0,A.IY.j(0)+":"+r,v)
v=w.bk()
v.sbS(0,D.aU)
r=t.I()
s.l(0,A.IZ.j(0)+":"+r,v)}},
aE(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a4.gfk()===0){B.jp().$1("[QR] WARN: width or height is zero. You should set a 'size' value or nest this painter in a Widget that defines a non-zero size")
return}x=a4.gfk()
w=a2.x.c
v=new C.aNc(w,x,0)
u=(w-1)*0
t=v.d=D.d.uT((x-u)/w*2)/2
s=t*w+u
v.e=s
s=v.f=(x-s)/2
a2.HA(A.ml,a3,v)
a2.HA(A.mm,a3,v)
a2.HA(A.rq,a3,v)
r=a2.as.ax4(A.k3)
r.sap(0,D.x)
for(x=w-7,q=t+0,p=0;p<w;++p)for(o=p<7,n=p>=x,m=s+p*q,l=0;l<w;++l){k=l<7
j=k&&o
i=k&&n
h=l>=x&&o
if(j||i||h)continue
k=a2.y
k===$&&B.b()
g=k.ex(l,p)?r:null
if(g==null)continue
f=s+l*q
k=a2.aki(p,l,w)
e=k?0.5:0
k=a2.akj(p,l,w)
d=k?0.5:0
a3.cX(new B.w(m,f,m+(t+e),f+(t+d)),g)}x=a2.e
if(x!=null){w=x.gdE(x)
t=x.gc3(x)
a0=a2.aoW(a4,new B.E(w,t),A.oz)
w=a0.a
t=(a4.a-w)/2
s=a0.b
q=(a4.b-s)/2
g=$.ax().bk()
g.sy6(!0)
g.sov(D.dw)
k=x.gdE(x)
a1=x.gc3(x)
a3.lD(x,D.E.xZ(new B.E(k,a1),new B.w(0,0,k,a1)),D.E.xZ(a0,new B.w(t,q,t+w,q+s)),g)}},
akj(d,e,f){var x,w=e+1
if(w>=f)return!1
x=this.y
x===$&&B.b()
return x.ex(w,d)},
aki(d,e,f){var x,w=d+1
if(w>=f)return!1
x=this.y
x===$&&B.b()
return x.ex(e,w)},
HA(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=f.d
j===$&&B.b()
x=7*j+6*f.c-j
w=j/2
v=f.f
v===$&&B.b()
u=f.e
u===$&&B.b()
t=v+u-(x+w)
if(d===A.ml){v+=w
s=new B.e(v,v)}else{v+=w
s=d===A.mm?new B.e(v,t):new B.e(t,v)}v=this.as
r=v.Ds(A.IX,d)
r.shz(j)
r.sap(0,D.x)
q=v.Ds(A.IY,d)
q.shz(j)
q.sap(0,D.lr)
p=v.Ds(A.IZ,d)
p.sap(0,D.x)
v=s.a
u=s.b
o=x-2*j
n=v+j
m=u+j
l=x-j*2-2*w
j=n+w
k=m+w
e.cX(new B.w(v,u,v+x,u+x),r)
e.cX(new B.w(n,m,n+o,m+o),q)
e.cX(new B.w(j,k,j+l,k+l),p)},
aoW(d,e,f){var x,w,v,u=f!=null
if(u&&!f.gV(f))return f
else{u=u&&f.gyl()>0
x=e.a
w=e.b
if(u){v=f.gyl()/e.gyl()
return new B.E(v*x,v*w)}else{v=0.25*d.gfk()/e.gyl()
return new B.E(v*x,v*w)}}},
f3(d){var x,w,v=this
if(d instanceof C.I3){if(v.c===d.c){x=v.z
x===$&&B.b()
w=d.z
w===$&&B.b()
x=x!==w||v.x!==d.x||v.e!=d.e||!v.f.k(0,d.f)||!v.r.k(0,d.r)||!v.w.k(0,d.w)}else x=!0
return x}return!0}}
C.aNc.prototype={}
C.vf.prototype={
I(){return"QrCodeElement."+this.b}}
C.xH.prototype={
I(){return"FinderPatternPosition."+this.b}}
C.axS.prototype={
I(){return"QrEyeShape."+this.b}}
C.axR.prototype={
I(){return"QrDataModuleShape."+this.b}}
C.a_Q.prototype={
gD(d){return(B.e9(A.ak0)^D.e.gD(4278190080))>>>0},
k(d,e){var x
if(e==null)return!1
if(e instanceof C.a_Q){x=D.x.k(0,D.x)
return x}return!1}}
C.a_O.prototype={
gD(d){return(B.e9(A.ak_)^D.e.gD(4278190080))>>>0},
k(d,e){var x
if(e==null)return!1
if(e instanceof C.a_O){x=D.x.k(0,D.x)
return x}return!1}}
C.a_P.prototype={
gD(d){return B.a_(30,30,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)^D.Tv.gD(null)},
k(d,e){if(e==null)return!1
if(e instanceof C.a_P)return A.oz.k(0,A.oz)&&!0
return!1}}
C.I4.prototype={}
C.I5.prototype={
I(){return"QrValidationStatus."+this.b}}
var z=a.updateTypes([])
C.aNQ.prototype={
$2(d,e){var x,w=this.a,v=w.e
v===$&&B.b()
if(v.a!==A.oa)return w.afW(d,e,v.c)
v=w.a
x=v.x
w=B.VF(new C.aNP(w,d,e,x),w.alf(d,v.at),y.I)
return w},
$S:130}
C.aNP.prototype={
$2(d,e){var x=this,w=null,v=e.c
if(v!=null){B.jp().$1("snapshot error: "+B.h(v))
v=x.a
v.a.toString
v=v.VA(w,x.d)
return v}v=e.b
if(v!=null){B.jp().$1("loaded image")
return x.a.VA(v,x.d)}else return B.aK(w,w,D.k,w,w,w,w,w,w,w,w,w,w,w)},
$S:693}
C.aNN.prototype={
$2(d,e){var x=this.a.f
x===$&&B.b()
this.b.M(0,x)
this.c.co(0,d.a)},
$S:142}
C.aNO.prototype={
$2(d,e){var x=this.a.f
x===$&&B.b()
this.b.M(0,x)
this.c.kG(d)},
$S:72};(function inheritance(){var x=a.mixin,w=a.inherit,v=a.inheritMany
w(C.aCd,E.a1m)
v(B.H,[C.HZ,C.Na])
v(B.r,[C.abe,C.zi,C.G_,C.axT,C.axQ,C.a_R,C.a_T,C.avu,C.aNc,C.a_Q,C.a_O,C.a_P,C.I4])
w(C.I1,C.abe)
w(C.I2,B.W)
w(C.abf,B.a8)
v(B.i6,[C.aNQ,C.aNP,C.aNN,C.aNO])
w(C.I3,B.tx)
v(B.k7,[C.vf,C.xH,C.axS,C.axR,C.I5])
x(C.abe,B.a1)})()
B.i3(b.typeUniverse,JSON.parse('{"HZ":{"H":[],"c":[]},"I1":{"a1":["t"],"y":["t"],"a9":["t"],"n":["t"],"n.E":"t","a1.E":"t"},"zi":{"b2m":[]},"G_":{"c8":[]},"I2":{"W":[],"c":[]},"abf":{"a8":["I2"]},"Na":{"H":[],"c":[]},"I3":{"al":[]}}'))
var y=(function rtii(){var x=B.a3
return{L:x("c8"),I:x("uf"),S:x("p<y<l>>"),Q:x("p<y<t?>>"),H:x("p<qN>"),v:x("p<b2m>"),J:x("p<a_T>"),t:x("p<l>"),w:x("j1"),Z:x("qN"),N:x("j"),O:x("b7<uf>"),g:x("ao<uf>"),p:x("l"),X:x("fL?"),T:x("y<l>?"),u:x("t?")}})();(function constants(){var x=a.makeConstList
A.M7=new B.es("assets/pic-qrcode.png",null,null)
A.k9=new B.bp(6,6)
A.ME=new B.d7(A.k9,A.k9,A.k9,A.k9)
A.pM=new B.bD(D.q,null,null,A.ME,null,null,null,D.M)
A.ak_=new C.axR(0,"square")
A.Os=new C.a_O()
A.oz=new B.E(30,30)
A.Ot=new C.a_P()
A.ak0=new C.axS(0,"square")
A.Ou=new C.a_Q()
A.Rz=new B.a7(11,11,11,11)
A.ml=new C.xH(0,"topLeft")
A.rq=new C.xH(1,"topRight")
A.mm=new C.xH(2,"bottomLeft")
A.Ui=B.a(x([1,0,3,2]),y.t)
A.Un=B.a(x([1,26,19]),y.t)
A.Um=B.a(x([1,26,16]),y.t)
A.Ul=B.a(x([1,26,13]),y.t)
A.Uo=B.a(x([1,26,9]),y.t)
A.Us=B.a(x([1,44,34]),y.t)
A.Ur=B.a(x([1,44,28]),y.t)
A.Uq=B.a(x([1,44,22]),y.t)
A.Up=B.a(x([1,44,16]),y.t)
A.Uu=B.a(x([1,70,55]),y.t)
A.Ut=B.a(x([1,70,44]),y.t)
A.UM=B.a(x([2,35,17]),y.t)
A.UL=B.a(x([2,35,13]),y.t)
A.Uj=B.a(x([1,100,80]),y.t)
A.UO=B.a(x([2,50,32]),y.t)
A.UN=B.a(x([2,50,24]),y.t)
A.XO=B.a(x([4,25,9]),y.t)
A.Uk=B.a(x([1,134,108]),y.t)
A.UP=B.a(x([2,67,43]),y.t)
A.Wm=B.a(x([2,33,15,2,34,16]),y.t)
A.Wx=B.a(x([2,33,11,2,34,12]),y.t)
A.UQ=B.a(x([2,86,68]),y.t)
A.XS=B.a(x([4,43,27]),y.t)
A.XR=B.a(x([4,43,19]),y.t)
A.XQ=B.a(x([4,43,15]),y.t)
A.UR=B.a(x([2,98,78]),y.t)
A.XT=B.a(x([4,49,31]),y.t)
A.WI=B.a(x([2,32,14,4,33,15]),y.t)
A.WT=B.a(x([4,39,13,1,40,14]),y.t)
A.UJ=B.a(x([2,121,97]),y.t)
A.X3=B.a(x([2,60,38,2,61,39]),y.t)
A.Xe=B.a(x([4,40,18,2,41,19]),y.t)
A.Xp=B.a(x([4,40,14,2,41,15]),y.t)
A.UK=B.a(x([2,146,116]),y.t)
A.XA=B.a(x([3,58,36,2,59,37]),y.t)
A.VD=B.a(x([4,36,16,4,37,17]),y.t)
A.VO=B.a(x([4,36,12,4,37,13]),y.t)
A.VZ=B.a(x([2,86,68,2,87,69]),y.t)
A.W9=B.a(x([4,69,43,1,70,44]),y.t)
A.Wg=B.a(x([6,43,19,2,44,20]),y.t)
A.Wh=B.a(x([6,43,15,2,44,16]),y.t)
A.XM=B.a(x([4,101,81]),y.t)
A.Wi=B.a(x([1,80,50,4,81,51]),y.t)
A.Wj=B.a(x([4,50,22,4,51,23]),y.t)
A.Wk=B.a(x([3,36,12,8,37,13]),y.t)
A.Wl=B.a(x([2,116,92,2,117,93]),y.t)
A.Wn=B.a(x([6,58,36,2,59,37]),y.t)
A.Wo=B.a(x([4,46,20,6,47,21]),y.t)
A.Wp=B.a(x([7,42,14,4,43,15]),y.t)
A.XN=B.a(x([4,133,107]),y.t)
A.Wq=B.a(x([8,59,37,1,60,38]),y.t)
A.Wr=B.a(x([8,44,20,4,45,21]),y.t)
A.Ws=B.a(x([12,33,11,4,34,12]),y.t)
A.Wt=B.a(x([3,145,115,1,146,116]),y.t)
A.Wu=B.a(x([4,64,40,5,65,41]),y.t)
A.Wv=B.a(x([11,36,16,5,37,17]),y.t)
A.Ww=B.a(x([11,36,12,5,37,13]),y.t)
A.Wy=B.a(x([5,109,87,1,110,88]),y.t)
A.Wz=B.a(x([5,65,41,5,66,42]),y.t)
A.WA=B.a(x([5,54,24,7,55,25]),y.t)
A.Uc=B.a(x([11,36,12]),y.t)
A.WB=B.a(x([5,122,98,1,123,99]),y.t)
A.WC=B.a(x([7,73,45,3,74,46]),y.t)
A.WD=B.a(x([15,43,19,2,44,20]),y.t)
A.WE=B.a(x([3,45,15,13,46,16]),y.t)
A.WF=B.a(x([1,135,107,5,136,108]),y.t)
A.WG=B.a(x([10,74,46,1,75,47]),y.t)
A.WH=B.a(x([1,50,22,15,51,23]),y.t)
A.WJ=B.a(x([2,42,14,17,43,15]),y.t)
A.WK=B.a(x([5,150,120,1,151,121]),y.t)
A.WL=B.a(x([9,69,43,4,70,44]),y.t)
A.WM=B.a(x([17,50,22,1,51,23]),y.t)
A.WN=B.a(x([2,42,14,19,43,15]),y.t)
A.WO=B.a(x([3,141,113,4,142,114]),y.t)
A.WP=B.a(x([3,70,44,11,71,45]),y.t)
A.WQ=B.a(x([17,47,21,4,48,22]),y.t)
A.WR=B.a(x([9,39,13,16,40,14]),y.t)
A.WS=B.a(x([3,135,107,5,136,108]),y.t)
A.WU=B.a(x([3,67,41,13,68,42]),y.t)
A.WV=B.a(x([15,54,24,5,55,25]),y.t)
A.WW=B.a(x([15,43,15,10,44,16]),y.t)
A.WX=B.a(x([4,144,116,4,145,117]),y.t)
A.Uf=B.a(x([17,68,42]),y.t)
A.WY=B.a(x([17,50,22,6,51,23]),y.t)
A.WZ=B.a(x([19,46,16,6,47,17]),y.t)
A.X_=B.a(x([2,139,111,7,140,112]),y.t)
A.Ug=B.a(x([17,74,46]),y.t)
A.X0=B.a(x([7,54,24,16,55,25]),y.t)
A.UZ=B.a(x([34,37,13]),y.t)
A.X1=B.a(x([4,151,121,5,152,122]),y.t)
A.X2=B.a(x([4,75,47,14,76,48]),y.t)
A.X4=B.a(x([11,54,24,14,55,25]),y.t)
A.X5=B.a(x([16,45,15,14,46,16]),y.t)
A.X6=B.a(x([6,147,117,4,148,118]),y.t)
A.X7=B.a(x([6,73,45,14,74,46]),y.t)
A.X8=B.a(x([11,54,24,16,55,25]),y.t)
A.X9=B.a(x([30,46,16,2,47,17]),y.t)
A.Xa=B.a(x([8,132,106,4,133,107]),y.t)
A.Xb=B.a(x([8,75,47,13,76,48]),y.t)
A.Xc=B.a(x([7,54,24,22,55,25]),y.t)
A.Xd=B.a(x([22,45,15,13,46,16]),y.t)
A.Xf=B.a(x([10,142,114,2,143,115]),y.t)
A.Xg=B.a(x([19,74,46,4,75,47]),y.t)
A.Xh=B.a(x([28,50,22,6,51,23]),y.t)
A.Xi=B.a(x([33,46,16,4,47,17]),y.t)
A.Xj=B.a(x([8,152,122,4,153,123]),y.t)
A.Xk=B.a(x([22,73,45,3,74,46]),y.t)
A.Xl=B.a(x([8,53,23,26,54,24]),y.t)
A.Xm=B.a(x([12,45,15,28,46,16]),y.t)
A.Xn=B.a(x([3,147,117,10,148,118]),y.t)
A.Xo=B.a(x([3,73,45,23,74,46]),y.t)
A.Xq=B.a(x([4,54,24,31,55,25]),y.t)
A.Xr=B.a(x([11,45,15,31,46,16]),y.t)
A.Xs=B.a(x([7,146,116,7,147,117]),y.t)
A.Xt=B.a(x([21,73,45,7,74,46]),y.t)
A.Xu=B.a(x([1,53,23,37,54,24]),y.t)
A.Xv=B.a(x([19,45,15,26,46,16]),y.t)
A.Xw=B.a(x([5,145,115,10,146,116]),y.t)
A.Xx=B.a(x([19,75,47,10,76,48]),y.t)
A.Xy=B.a(x([15,54,24,25,55,25]),y.t)
A.Xz=B.a(x([23,45,15,25,46,16]),y.t)
A.XB=B.a(x([13,145,115,3,146,116]),y.t)
A.XC=B.a(x([2,74,46,29,75,47]),y.t)
A.XD=B.a(x([42,54,24,1,55,25]),y.t)
A.XE=B.a(x([23,45,15,28,46,16]),y.t)
A.Ue=B.a(x([17,145,115]),y.t)
A.XF=B.a(x([10,74,46,23,75,47]),y.t)
A.XG=B.a(x([10,54,24,35,55,25]),y.t)
A.XH=B.a(x([19,45,15,35,46,16]),y.t)
A.XI=B.a(x([17,145,115,1,146,116]),y.t)
A.XJ=B.a(x([14,74,46,21,75,47]),y.t)
A.XK=B.a(x([29,54,24,19,55,25]),y.t)
A.VE=B.a(x([11,45,15,46,46,16]),y.t)
A.VF=B.a(x([13,145,115,6,146,116]),y.t)
A.VG=B.a(x([14,74,46,23,75,47]),y.t)
A.VH=B.a(x([44,54,24,7,55,25]),y.t)
A.VI=B.a(x([59,46,16,1,47,17]),y.t)
A.VJ=B.a(x([12,151,121,7,152,122]),y.t)
A.VK=B.a(x([12,75,47,26,76,48]),y.t)
A.VL=B.a(x([39,54,24,14,55,25]),y.t)
A.VM=B.a(x([22,45,15,41,46,16]),y.t)
A.VN=B.a(x([6,151,121,14,152,122]),y.t)
A.VP=B.a(x([6,75,47,34,76,48]),y.t)
A.VQ=B.a(x([46,54,24,10,55,25]),y.t)
A.VR=B.a(x([2,45,15,64,46,16]),y.t)
A.VS=B.a(x([17,152,122,4,153,123]),y.t)
A.VT=B.a(x([29,74,46,14,75,47]),y.t)
A.VU=B.a(x([49,54,24,10,55,25]),y.t)
A.VV=B.a(x([24,45,15,46,46,16]),y.t)
A.VW=B.a(x([4,152,122,18,153,123]),y.t)
A.VX=B.a(x([13,74,46,32,75,47]),y.t)
A.VY=B.a(x([48,54,24,14,55,25]),y.t)
A.W_=B.a(x([42,45,15,32,46,16]),y.t)
A.W0=B.a(x([20,147,117,4,148,118]),y.t)
A.W1=B.a(x([40,75,47,7,76,48]),y.t)
A.W2=B.a(x([43,54,24,22,55,25]),y.t)
A.W3=B.a(x([10,45,15,67,46,16]),y.t)
A.W4=B.a(x([19,148,118,6,149,119]),y.t)
A.W5=B.a(x([18,75,47,31,76,48]),y.t)
A.W6=B.a(x([34,54,24,34,55,25]),y.t)
A.W7=B.a(x([20,45,15,61,46,16]),y.t)
A.jd=B.a(x([A.Un,A.Um,A.Ul,A.Uo,A.Us,A.Ur,A.Uq,A.Up,A.Uu,A.Ut,A.UM,A.UL,A.Uj,A.UO,A.UN,A.XO,A.Uk,A.UP,A.Wm,A.Wx,A.UQ,A.XS,A.XR,A.XQ,A.UR,A.XT,A.WI,A.WT,A.UJ,A.X3,A.Xe,A.Xp,A.UK,A.XA,A.VD,A.VO,A.VZ,A.W9,A.Wg,A.Wh,A.XM,A.Wi,A.Wj,A.Wk,A.Wl,A.Wn,A.Wo,A.Wp,A.XN,A.Wq,A.Wr,A.Ws,A.Wt,A.Wu,A.Wv,A.Ww,A.Wy,A.Wz,A.WA,A.Uc,A.WB,A.WC,A.WD,A.WE,A.WF,A.WG,A.WH,A.WJ,A.WK,A.WL,A.WM,A.WN,A.WO,A.WP,A.WQ,A.WR,A.WS,A.WU,A.WV,A.WW,A.WX,A.Uf,A.WY,A.WZ,A.X_,A.Ug,A.X0,A.UZ,A.X1,A.X2,A.X4,A.X5,A.X6,A.X7,A.X8,A.X9,A.Xa,A.Xb,A.Xc,A.Xd,A.Xf,A.Xg,A.Xh,A.Xi,A.Xj,A.Xk,A.Xl,A.Xm,A.Xn,A.Xo,A.Xq,A.Xr,A.Xs,A.Xt,A.Xu,A.Xv,A.Xw,A.Xx,A.Xy,A.Xz,A.XB,A.XC,A.XD,A.XE,A.Ue,A.XF,A.XG,A.XH,A.XI,A.XJ,A.XK,A.VE,A.VF,A.VG,A.VH,A.VI,A.VJ,A.VK,A.VL,A.VM,A.VN,A.VP,A.VQ,A.VR,A.VS,A.VT,A.VU,A.VV,A.VW,A.VX,A.VY,A.W_,A.W0,A.W1,A.W2,A.W3,A.W4,A.W5,A.W6,A.W7]),y.S)
A.Yf=B.a(x([6,18]),y.t)
A.Yg=B.a(x([6,22]),y.t)
A.Yj=B.a(x([6,26]),y.t)
A.Yp=B.a(x([6,30]),y.t)
A.Yv=B.a(x([6,34]),y.t)
A.Yh=B.a(x([6,22,38]),y.t)
A.Yi=B.a(x([6,24,42]),y.t)
A.Yk=B.a(x([6,26,46]),y.t)
A.Yo=B.a(x([6,28,50]),y.t)
A.Yq=B.a(x([6,30,54]),y.t)
A.Yu=B.a(x([6,32,58]),y.t)
A.Yw=B.a(x([6,34,62]),y.t)
A.Yl=B.a(x([6,26,46,66]),y.t)
A.Ym=B.a(x([6,26,48,70]),y.t)
A.Yn=B.a(x([6,26,50,74]),y.t)
A.Yr=B.a(x([6,30,54,78]),y.t)
A.Ys=B.a(x([6,30,56,82]),y.t)
A.Yt=B.a(x([6,30,58,86]),y.t)
A.Yx=B.a(x([6,34,62,90]),y.t)
A.Zk=B.a(x([6,28,50,72,94]),y.t)
A.Zl=B.a(x([6,26,50,74,98]),y.t)
A.Zm=B.a(x([6,30,54,78,102]),y.t)
A.Zn=B.a(x([6,28,54,80,106]),y.t)
A.Zo=B.a(x([6,32,58,84,110]),y.t)
A.Zp=B.a(x([6,30,58,86,114]),y.t)
A.Zq=B.a(x([6,34,62,90,118]),y.t)
A.W8=B.a(x([6,26,50,74,98,122]),y.t)
A.Wa=B.a(x([6,30,54,78,102,126]),y.t)
A.Wb=B.a(x([6,26,52,78,104,130]),y.t)
A.Wc=B.a(x([6,30,56,82,108,134]),y.t)
A.Wd=B.a(x([6,34,60,86,112,138]),y.t)
A.We=B.a(x([6,30,58,86,114,142]),y.t)
A.Wf=B.a(x([6,34,62,90,118,146]),y.t)
A.a_Z=B.a(x([6,30,54,78,102,126,150]),y.t)
A.a0_=B.a(x([6,24,50,76,102,128,154]),y.t)
A.a00=B.a(x([6,28,54,80,106,132,158]),y.t)
A.a01=B.a(x([6,32,58,84,110,136,162]),y.t)
A.a02=B.a(x([6,26,54,82,110,138,166]),y.t)
A.a03=B.a(x([6,30,58,86,114,142,170]),y.t)
A.a3L=B.a(x([D.en,A.Yf,A.Yg,A.Yj,A.Yp,A.Yv,A.Yh,A.Yi,A.Yk,A.Yo,A.Yq,A.Yu,A.Yw,A.Yl,A.Ym,A.Yn,A.Yr,A.Ys,A.Yt,A.Yx,A.Zk,A.Zl,A.Zm,A.Zn,A.Zo,A.Zp,A.Zq,A.W8,A.Wa,A.Wb,A.Wc,A.Wd,A.We,A.Wf,A.a_Z,A.a0_,A.a00,A.a01,A.a02,A.a03]),y.S)
A.a48=B.a(x([A.ml,A.rq,A.mm]),B.a3("p<xH>"))
A.IX=new C.vf(0,"finderPatternOuter")
A.IY=new C.vf(1,"finderPatternInner")
A.IZ=new C.vf(2,"finderPatternDot")
A.k3=new C.vf(3,"codePixel")
A.ajZ=new C.vf(4,"codePixelEmpty")
A.oa=new C.I5(0,"valid")
A.ak1=new C.I5(1,"contentTooLong")
A.ak2=new C.I5(2,"error")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bxf","aUC",()=>C.bmy())
x($,"bwr","aZ5",()=>C.bmx())})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_6",e:"endPart",h:b})})($__dart_deferred_initializers__,"VXLSPcDXKfMU+JGJtBJdHtjouag=");