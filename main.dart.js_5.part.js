self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={HD:function HD(d,e,f){this.c=d
this.d=e
this.a=f},HG:function HG(d){this.a=d
this.b=0},aaM:function aaM(){},zb:function zb(d){this.b=d},FJ:function FJ(d){this.c=d},
a_J(d,e){var x,w,v=d.length,u=0
while(!0){if(!(u<v&&d[u]===0))break;++u}v-=u
x=new Uint8Array(v+e)
for(w=0;w<v;++w)x[w]=d[w+u]
return new C.awH(x)},
awH:function awH(d){this.a=d},
b0z(d,e){var x=B.a([],y.v)
B.a_L(d,1,40,"typeNumber")
C.bfb(e,A.TN,"errorCorrectLevel",null)
return new C.awE(d,e,d*4+17,x)},
bf7(d,e){var x,w,v,u,t,s,r,q
for(x=y.t,w=1;w<40;++w){v=C.b0B(w,d)
u=new C.HG(B.a([],x))
for(t=v.length,s=0,r=0;r<t;++r)s+=v[r].b
for(r=0;r<1;++r){q=e[r]
u.mK(0,4,4)
u.mK(0,q.b.length,C.b3X(4,w))
q.uK(0,u)}if(u.b<=s*8)break}return w},
b3p(d,e,f){var x,w,v,u,t,s,r,q=C.b0B(d,e),p=new C.HG(B.a([],y.t))
for(x=0;x<f.length;++x){w=f[x]
p.mK(0,4,4)
p.mK(0,w.b.length,C.b3X(4,d))
w.uK(0,p)}for(v=q.length,u=0,x=0;x<v;++x)u+=q[x].b
t=u*8
v=p.b
if(v>t)throw B.d(new C.FJ("Input too long. "+v+" > "+t))
if(v+4<=t)p.mK(0,0,4)
for(;D.e.bA(p.b,8)!==0;)p.a29(!1)
for(s=0;!0;s=r){if(p.b>=t)break
r=s+1
p.mK(0,(s&1)===0?236:17,8)}return C.bkz(p,q)},
bkz(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=y.T,g=B.aQ(e.length,null,!1,h),f=B.aQ(e.length,null,!1,h)
for(h=d.a,x=0,w=0,v=0,u=0;u<e.length;++u){t=e[u]
s=t.b
r=t.a-s
w=Math.max(w,s)
v=Math.max(v,r)
q=new Uint8Array(s)
g[u]=q
for(p=0;p<s;++p)q[p]=h[p+x]&255
x+=s
o=C.bkV(r)
t=o.a.length-1
n=C.a_J(q,t).a1c(o)
m=new Uint8Array(t)
f[u]=m
for(l=n.a,k=l.length,p=0;p<t;++p){j=p+k-t
m[p]=j>=0?l[j]:0}}i=B.a([],y.t)
for(p=0;p<w;++p)for(u=0;u<e.length;++u){h=g[u]
if(p<h.length)i.push(h[p])}for(p=0;p<v;++p)for(u=0;u<e.length;++u){h=f[u]
if(p<h.length)i.push(h[p])}return i},
b3X(d,e){var x=null
if(1<=e&&e<10)switch(d){case 1:return 10
case 2:return 9
case 4:return 8
case 8:return 8
default:throw B.d(B.bm("mode:"+d,x))}else if(e<27)switch(d){case 1:return 12
case 2:return 11
case 4:return 16
case 8:return 10
default:throw B.d(B.bm("mode:"+d,x))}else if(e<41)switch(d){case 1:return 14
case 2:return 13
case 4:return 16
case 8:return 12
default:throw B.d(B.bm("mode:"+d,x))}else throw B.d(B.bm("type:"+e,x))},
bkV(d){var x,w=y.t,v=C.a_J(B.a([1],w),0)
for(x=0;x<d;++x)v=v.dl(0,C.a_J(B.a([1,C.aWt(x)],w),0))
return v},
awE:function awE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=null
_.e=g},
bf8(d){var x,w,v,u,t,s,r,q,p,o,n
for(x=y.Q,w=d.c,v=d.a,u=d.b,t=d.e,s=0,r=null,q=0;q<8;++q){p=new C.a_I(w,v,u,q,B.a([],x))
o=d.d
p.TF(q,o==null?d.d=C.b3p(v,u,t):o,!0)
n=C.blT(p)
if(q===0||s>n){r=p
s=n}}t=r.d
x=new C.a_I(w,v,u,t,B.a([],x))
x.TF(t,d.gatm(),!1)
return x},
blW(d,e,f){var x
switch(d){case 0:return(e+f&1)===0
case 1:return(e&1)===0
case 2:return D.e.bA(f,3)===0
case 3:return D.e.bA(e+f,3)===0
case 4:return(D.e.cS(e,2)+D.e.cS(f,3)&1)===0
case 5:x=e*f
return D.e.bA(x,2)+D.e.bA(x,3)===0
case 6:x=e*f
return(D.e.bA(x,2)+D.e.bA(x,3)&1)===0
case 7:return(D.e.bA(e*f,3)+D.e.bA(e+f,2)&1)===0
default:throw B.d(B.bm("bad maskPattern:"+d,null))}},
blT(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
for(x=0,w=0;w<k;++w)for(v=0;v<k;++v){u=d.ei(w,v)
for(t=0,s=-1;s<=1;++s){r=w+s
if(r<0||k<=r)continue
for(q=s===0,p=-1;p<=1;++p){o=v+p
if(o<0||k<=o)continue
if(q&&p===0)continue
if(u===d.ei(r,o))++t}}if(t>5)x+=3+t-5}for(r=k-1,w=0;w<r;w=n)for(n=w+1,v=0;v<r;){m=d.ei(w,v)?1:0
if(d.ei(n,v))++m;++v
if(d.ei(w,v))++m
if(d.ei(n,v))++m
if(m===0||m===4)x+=3}for(r=k-6,w=0;w<k;++w)for(v=0;v<r;++v)if(d.ei(w,v)&&!d.ei(w,v+1)&&d.ei(w,v+2)&&d.ei(w,v+3)&&d.ei(w,v+4)&&!d.ei(w,v+5)&&d.ei(w,v+6))x+=40
for(v=0;v<k;++v)for(w=0;w<r;++w)if(d.ei(w,v)&&!d.ei(w+1,v)&&d.ei(w+2,v)&&d.ei(w+3,v)&&d.ei(w+4,v)&&!d.ei(w+5,v)&&d.ei(w+6,v))x+=40
for(v=0,l=0;v<k;++v)for(w=0;w<k;++w)if(d.ei(w,v))++l
return x+Math.abs(100*l/k/k-50)/5*10},
a_I:function a_I(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b0B(d,e){var x,w,v,u,t,s,r=C.blp(d,e),q=r.length/3|0,p=B.a([],y.J)
for(x=0;x<q;++x){w=x*3
v=r[w]
u=r[w+1]
t=r[w+2]
for(s=0;s<v;++s)p.push(new C.a_K(u,t))}return p},
blp(d,e){switch(e){case 1:return A.iV[(d-1)*4]
case 0:return A.iV[(d-1)*4+1]
case 3:return A.iV[(d-1)*4+2]
case 2:return A.iV[(d-1)*4+3]
default:throw B.d(B.bm("bad rs block @ typeNumber: "+d+"/errorCorrectLevel:"+e,null))}},
a_K:function a_K(d,e){this.a=d
this.b=e},
aur:function aur(d,e){this.a=d
this.b=e},
HH:function HH(d,e,f,g,h,i){var _=this
_.c=d
_.w=e
_.x=f
_.as=g
_.at=h
_.a=i},
aaN:function aaN(d){var _=this
_.d=null
_.f=_.e=$
_.a=null
_.b=d
_.c=null},
aLW:function aLW(d){this.a=d},
aLV:function aLV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aLT:function aLT(d,e,f){this.a=d
this.b=e
this.c=f},
aLU:function aLU(d,e,f){this.a=d
this.b=e
this.c=f},
MK:function MK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
HI:function HI(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aLi:function aLi(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=$},
v5:function v5(d,e){this.a=d
this.b=e},
xx:function xx(d,e){this.a=d
this.b=e},
awG:function awG(d,e){this.a=d
this.b=e},
awF:function awF(d,e){this.a=d
this.b=e},
a_H:function a_H(){},
a_F:function a_F(){},
a_G:function a_G(){},
bf9(d,e,f){var x,w,v,u,t,s=B.b4("qrCode")
try{if(f!==-1){s.sd3(C.b0z(f,e))
v=s.aH()
u=D.ct.dg(d)
v.e.push(new C.zb(u))
v.d=null}else{v=C.b0z(C.bf7(e,B.a([new C.zb(D.ct.dg(d))],y.v)),e)
v.e.push(new C.zb(D.ct.dg(d)))
v.d=null
s.sd3(v)}v=s.aH()
return new C.HJ(A.nO,v,null)}catch(t){v=B.ae(t)
if(v instanceof C.FJ){x=v
return new C.HJ(A.ajg,null,x)}else if(y.L.b(v)){w=v
return new C.HJ(A.ajh,null,w)}else throw t}},
HJ:function HJ(d,e,f){this.a=d
this.b=e
this.c=f},
HK:function HK(d,e){this.a=d
this.b=e},
bfb(d,e,f,g){return B.aU9(d,g==null?J.bz(e):g,e,null,f)},
b5a(d){if(d<1)throw B.d(B.bm("glog("+d+")",null))
return $.aSO()[d]},
aWt(d){for(;d<0;)d+=255
for(;d>=256;)d-=255
return $.aXg()[d]},
bkA(){var x,w=new Uint8Array(256)
for(x=0;x<8;++x)w[x]=D.e.Vx(1,x)
for(x=8;x<256;++x)w[x]=w[x-4]^w[x-5]^w[x-6]^w[x-8]
return w},
bkB(){var x,w=new Uint8Array(256)
for(x=0;x<255;++x)w[$.aXg()[x]]=x
return w},
bmS(d){var x,w=d<<10>>>0
for(x=w;C.wi(x)-C.wi(1335)>=0;)x=(x^D.e.F5(1335,C.wi(x)-C.wi(1335)))>>>0
return((w|x)^21522)>>>0},
bmT(d){var x,w=d<<12>>>0
for(x=w;C.wi(x)-C.wi(7973)>=0;)x=(x^D.e.F5(7973,C.wi(x)-C.wi(7973)))>>>0
return(w|x)>>>0},
wi(d){var x
for(x=0;d!==0;){++x
d=d>>>1}return x}},A,B,D,J
C=a.updateHolder(c[13],C)
A=c[25]
B=c[0]
D=c[2]
J=c[1]
C.HD.prototype={
v(d){return new C.HH(this.c,A.Rb,this.d,A.LM,A.O7,null)}}
C.HG.prototype={
l(d,e,f){return B.a0(B.a5("cannot change"))},
i(d,e){return(D.e.II(this.a[D.e.cS(e,8)],7-D.e.bA(e,8))&1)===1},
gp(d){return this.b},
sp(d,e){B.a0(B.a5("Cannot change"))},
mK(d,e,f){var x
for(x=0;x<f;++x)this.a29((D.e.a5N(e,f-x-1)&1)===1)},
a29(d){var x=this,w=D.e.cS(x.b,8),v=x.a
if(v.length<=w)v.push(0)
if(d)v[w]=v[w]|D.e.no(128,D.e.bA(x.b,8));++x.b},
$ia8:1,
$io:1,
$iA:1}
C.aaM.prototype={}
C.zb.prototype={
gp(d){return this.b.length},
uK(d,e){var x,w,v
for(x=this.b,w=x.length,v=0;v<w;++v)e.mK(0,x[v],8)},
$ib0A:1}
C.FJ.prototype={
j(d){return"QrInputTooLongException: "+this.c},
$ic7:1}
C.awH.prototype={
i(d,e){return this.a[e]},
gp(d){return this.a.length},
dl(d,e){var x,w,v,u,t,s,r,q=this.a,p=q.length,o=e.a,n=o.length,m=new Uint8Array(p+n-1)
for(x=0;x<p;++x)for(w=0;w<n;++w){v=x+w
u=m[v]
t=q[x]
if(t<1)B.a0(B.bm("glog("+t+")",null))
s=$.aSO()
t=s[t]
r=o[w]
if(r<1)B.a0(B.bm("glog("+r+")",null))
m[v]=(u^C.aWt(t+s[r]))>>>0}return C.a_J(m,0)},
a1c(d){var x,w,v,u=this.a,t=u.length,s=d.a,r=s.length
if(t-r<0)return this
x=C.b5a(u[0])-C.b5a(s[0])
w=new Uint8Array(t)
for(v=0;v<t;++v)w[v]=u[v]
for(v=0;v<r;++v){u=w[v]
t=s[v]
if(t<1)B.a0(B.bm("glog("+t+")",null))
w[v]=(u^C.aWt($.aSO()[t]+x))>>>0}return C.a_J(w,0).a1c(d)}}
C.awE.prototype={
gatm(){var x=this,w=x.d
return w==null?x.d=C.b3p(x.a,x.b,x.e):w}}
C.a_I.prototype={
amH(){var x,w,v,u=this.e
D.b.W(u)
for(x=this.a,w=y.u,v=0;v<x;++v)u.push(B.aQ(x,null,!1,w))},
ei(d,e){var x
if(d>=0){x=this.a
x=x<=d||e<0||x<=e}else x=!0
if(x)throw B.d(B.bm(""+d+" , "+e,null))
x=this.e[d][e]
x.toString
return x},
TF(d,e,f){var x,w=this
w.amH()
w.ID(0,0)
x=w.a-7
w.ID(x,0)
w.ID(0,x)
w.anN()
w.anO()
w.anP(d,f)
if(w.b>=7)w.anQ(f)
w.ajQ(e,d)},
ID(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
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
anN(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.a3b[this.b-1]
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
anO(){var x,w,v,u,t
for(x=this.a-8,w=this.e,v=8;v<x;++v){u=w[v]
if(u[6]!=null)continue
u[6]=(v&1)===0}for(t=8;t<x;++t){u=w[6]
if(u[t]!=null)continue
u[t]=(t&1)===0}},
anP(d,e){var x,w,v,u,t,s,r=C.bmS((this.c<<3|d)>>>0)
for(x=this.e,w=this.a,v=w-15,u=!e,t=0;t<15;++t){s=u&&(D.e.no(r,t)&1)===1
if(t<6)x[t][8]=s
else if(t<8)x[t+1][8]=s
else x[v+t][8]=s}for(t=0;t<15;++t){s=u&&(D.e.no(r,t)&1)===1
if(t<8)x[8][w-t-1]=s
else{v=15-t-1
if(t<9)x[8][v+1]=s
else x[8][v]=s}}x[w-8][8]=u},
anQ(d){var x,w,v,u,t,s=C.bmT(this.b)
for(x=this.e,w=this.a,v=!d,u=0;u<18;++u){t=v&&(D.e.no(s,u)&1)===1
x[D.e.cS(u,3)][D.e.bA(u,3)+w-8-3]=t}for(u=0;u<18;++u){t=v&&(D.e.no(s,u)&1)===1
x[D.e.bA(u,3)+w-8-3][D.e.cS(u,3)]=t}},
ajQ(d,e){var x,w,v,u,t,s,r,q,p,o=this.a,n=o-1
for(x=this.e,w=n,v=-1,u=7,t=0;w>0;w-=2){if(w===6)--w
for(;!0;){for(s=0;s<2;++s){r=w-s
if(x[n][r]==null){q=t<d.length&&(D.e.II(d[t],u)&1)===1
if(C.blW(e,n,r))q=!q
x[n][r]=q;--u
if(u===-1){++t
u=7}}}n+=v
if(n<0||o<=n){n-=v
p=-v
v=p
break}}}}}
C.a_K.prototype={}
C.aur.prototype={
Qs(d,e){var x=e!=null?e.G():"any"
return d.j(0)+":"+x},
ars(d,e,f,g){if(f===A.jK)this.a.push(e)
else this.b.l(0,this.Qs(f,g),e)},
Y8(d,e,f){return this.ars(d,e,f,null)},
Cx(d,e){return d===A.jK?D.b.gN(this.a):this.b.i(0,this.Qs(d,e))},
auU(d){return this.Cx(d,null)}}
C.HH.prototype={
an(){return new C.aaN(D.m)}}
C.aaN.prototype={
v(d){var x=this,w=x.e=C.bf9(x.a.c,1,-1)
x.d=w.a===A.nO?w.b:null
return new B.fG(new C.aLW(x),null)},
Ux(d,e){var x,w,v=null,u=this.d
u.toString
x=u.a
w=new C.HI(x,u.b,!0,d,this.a.at,A.O8,A.O6,u,new C.aur(B.a([],y.H),B.w(y.N,y.Z)),v,v)
w.z=x
w.aj6()
return new C.MK(e,D.a_,this.a.w,B.nJ(v,v,v,w,D.J),"qr code",v)},
aeL(d,e,f){var x,w=null,v=this.a
v.toString
x=B.aM(w,w,D.k,w,w,w,w,w,w,w,w,w,w,w)
return new C.MK(v.x,D.a_,v.w,x,"qr code",w)},
ajL(d,e){var x=this,w=null,v=B.bI(d,w,y.w).w,u=new B.an($.aq,y.g),t=new B.b0(u,y.O),s=x.a.as.a_(new B.xY(w,v.b,w,w,w,w)),r=new B.h_(new C.aLT(x,s,t),w,new C.aLU(x,s,t))
x.f=r
s.a3(0,r)
return u}}
C.MK.prototype={
v(d){var x=this,w=null,v=x.c
return B.d2(w,B.aM(w,new B.bc(x.e,x.f,w),D.k,x.d,w,w,w,v,w,w,w,w,w,v),!1,w,!1,!1,w,w,w,w,x.r,w,w,w,w,w,w,w,w,w,w,w,w,w,w)}}
C.HI.prototype={
aj6(){var x,w,v,u,t,s,r
this.y=C.bf8(this.x)
x=this.as
w=$.az()
v=w.bi()
v.sbR(0,D.aP)
x.Y8(0,v,A.jK)
v=w.bi()
v.sbR(0,D.aP)
x.Y8(0,v,A.ajd)
for(u=0;u<3;++u){t=A.a3E[u]
v=w.bi()
v.sbR(0,D.an)
s=x.b
r=t.G()
s.l(0,A.Iw.j(0)+":"+r,v)
v=w.bi()
v.sbR(0,D.an)
r=t.G()
s.l(0,A.Ix.j(0)+":"+r,v)
v=w.bi()
v.sbR(0,D.aP)
r=t.G()
s.l(0,A.Iy.j(0)+":"+r,v)}},
aG(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a4.gf6()===0){B.jX().$1("[QR] WARN: width or height is zero. You should set a 'size' value or nest this painter in a Widget that defines a non-zero size")
return}x=a4.gf6()
w=a2.x.c
v=new C.aLi(w,x,0)
u=(w-1)*0
t=v.d=D.d.E3((x-u)/w*2)/2
s=t*w+u
v.e=s
s=v.f=(x-s)/2
a2.GO(A.m5,a3,v)
a2.GO(A.m6,a3,v)
a2.GO(A.r9,a3,v)
r=a2.as.auU(A.jK)
r.sav(0,D.x)
for(x=w-7,q=t+0,p=0;p<w;++p)for(o=p<7,n=p>=x,m=s+p*q,l=0;l<w;++l){k=l<7
j=k&&o
i=k&&n
h=l>=x&&o
if(j||i||h)continue
k=a2.y
k===$&&B.b()
g=k.ei(l,p)?r:null
if(g==null)continue
f=s+l*q
k=a2.aiU(p,l,w)
e=k?0.5:0
k=a2.aiV(p,l,w)
d=k?0.5:0
a3.ce(new B.x(m,f,m+(t+e),f+(t+d)),g)}x=a2.e
if(x!=null){w=x.gbU(x)
t=x.gc3(x)
a0=a2.an4(a4,new B.E(w,t),A.od)
w=a0.a
t=(a4.a-w)/2
s=a0.b
q=(a4.b-s)/2
g=$.az().bi()
g.sxB(!0)
g.so0(D.cw)
k=x.gbU(x)
a1=x.gc3(x)
a3.kB(x,D.D.xw(new B.E(k,a1),new B.x(0,0,k,a1)),D.D.xw(a0,new B.x(t,q,t+w,q+s)),g)}},
aiV(d,e,f){var x,w=e+1
if(w>=f)return!1
x=this.y
x===$&&B.b()
return x.ei(w,d)},
aiU(d,e,f){var x,w=d+1
if(w>=f)return!1
x=this.y
x===$&&B.b()
return x.ei(e,w)},
GO(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=f.d
j===$&&B.b()
x=7*j+6*f.c-j
w=j/2
v=f.f
v===$&&B.b()
u=f.e
u===$&&B.b()
t=v+u-(x+w)
if(d===A.m5){v+=w
s=new B.e(v,v)}else{v+=w
s=d===A.m6?new B.e(v,t):new B.e(t,v)}v=this.as
r=v.Cx(A.Iw,d)
r.sih(j)
r.sav(0,D.x)
q=v.Cx(A.Ix,d)
q.sih(j)
q.sav(0,D.l7)
p=v.Cx(A.Iy,d)
p.sav(0,D.x)
v=s.a
u=s.b
o=x-2*j
n=v+j
m=u+j
l=x-j*2-2*w
j=n+w
k=m+w
e.ce(new B.x(v,u,v+x,u+x),r)
e.ce(new B.x(n,m,n+o,m+o),q)
e.ce(new B.x(j,k,j+l,k+l),p)},
an4(d,e,f){var x,w,v,u=f!=null
if(u&&!f.gZ(f))return f
else{u=u&&f.gxO()>0
x=e.a
w=e.b
if(u){v=f.gxO()/e.gxO()
return new B.E(v*x,v*w)}else{v=0.25*d.gf6()/e.gxO()
return new B.E(v*x,v*w)}}},
fi(d){var x,w,v=this
if(d instanceof C.HI){if(v.c===d.c){x=v.z
x===$&&B.b()
w=d.z
w===$&&B.b()
x=x!==w||v.x!==d.x||v.e!=d.e||!v.f.k(0,d.f)||!v.r.k(0,d.r)||!v.w.k(0,d.w)}else x=!0
return x}return!0}}
C.aLi.prototype={}
C.v5.prototype={
G(){return"QrCodeElement."+this.b}}
C.xx.prototype={
G(){return"FinderPatternPosition."+this.b}}
C.awG.prototype={
G(){return"QrEyeShape."+this.b}}
C.awF.prototype={
G(){return"QrDataModuleShape."+this.b}}
C.a_H.prototype={
gB(d){return(B.e3(A.ajf)^D.e.gB(4278190080))>>>0},
k(d,e){var x
if(e==null)return!1
if(e instanceof C.a_H){x=D.x.k(0,D.x)
return x}return!1}}
C.a_F.prototype={
gB(d){return(B.e3(A.aje)^D.e.gB(4278190080))>>>0},
k(d,e){var x
if(e==null)return!1
if(e instanceof C.a_F){x=D.x.k(0,D.x)
return x}return!1}}
C.a_G.prototype={
gB(d){return B.a_(30,30,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)^D.T_.gB(null)},
k(d,e){if(e==null)return!1
if(e instanceof C.a_G)return A.od.k(0,A.od)&&!0
return!1}}
C.HJ.prototype={}
C.HK.prototype={
G(){return"QrValidationStatus."+this.b}}
var z=a.updateTypes([])
C.aLW.prototype={
$2(d,e){var x,w=this.a,v=w.e
v===$&&B.b()
if(v.a!==A.nO)return w.aeL(d,e,v.c)
v=w.a
x=v.x
w=B.aoj(new C.aLV(w,d,e,x),w.ajL(d,v.at),y.I)
return w},
$S:142}
C.aLV.prototype={
$2(d,e){var x=this,w=null,v=e.c
if(v!=null){B.jX().$1("snapshot error: "+B.f(v))
v=x.a
v.a.toString
v=v.Ux(w,x.d)
return v}v=e.b
if(v!=null){B.jX().$1("loaded image")
return x.a.Ux(v,x.d)}else return B.aM(w,w,D.k,w,w,w,w,w,w,w,w,w,w,w)},
$S:715}
C.aLT.prototype={
$2(d,e){var x=this.a.f
x===$&&B.b()
this.b.O(0,x)
this.c.ck(0,d.a)},
$S:147}
C.aLU.prototype={
$2(d,e){var x=this.a.f
x===$&&B.b()
this.b.O(0,x)
this.c.kw(d)},
$S:82};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.G,[C.HD,C.MK])
w(B.t,[C.aaM,C.zb,C.FJ,C.awH,C.awE,C.a_I,C.a_K,C.aur,C.aLi,C.a_H,C.a_F,C.a_G,C.HJ])
v(C.HG,C.aaM)
v(C.HH,B.Y)
v(C.aaN,B.ad)
w(B.k3,[C.aLW,C.aLV,C.aLT,C.aLU])
v(C.HI,B.xg)
w(B.p3,[C.v5,C.xx,C.awG,C.awF,C.HK])
x(C.aaM,B.a2)})()
B.nf(b.typeUniverse,JSON.parse('{"HD":{"G":[],"c":[]},"HG":{"a2":["r"],"A":["r"],"a8":["r"],"o":["r"],"o.E":"r","a2.E":"r"},"zb":{"b0A":[]},"FJ":{"c7":[]},"HH":{"Y":[],"c":[]},"aaN":{"ad":["HH"]},"MK":{"G":[],"c":[]},"HI":{"aw":[]}}'))
var y=(function rtii(){var x=B.a1
return{L:x("c7"),I:x("u4"),S:x("p<A<m>>"),Q:x("p<A<r?>>"),H:x("p<qE>"),v:x("p<b0A>"),J:x("p<a_K>"),t:x("p<m>"),w:x("jr"),Z:x("qE"),N:x("j"),O:x("b0<u4>"),g:x("an<u4>"),T:x("A<m>?"),u:x("r?")}})();(function constants(){var x=a.makeConstList
A.LM=new B.eF("assets/pic-qrcode.png",null,null)
A.jQ=new B.bp(6,6)
A.Mi=new B.d5(A.jQ,A.jQ,A.jQ,A.jQ)
A.ps=new B.bH(D.q,null,null,A.Mi,null,null,null,D.K)
A.aje=new C.awF(0,"square")
A.O6=new C.a_F()
A.od=new B.E(30,30)
A.O7=new C.a_G()
A.ajf=new C.awG(0,"square")
A.O8=new C.a_H()
A.Rb=new B.a4(11,11,11,11)
A.m5=new C.xx(0,"topLeft")
A.r9=new C.xx(1,"topRight")
A.m6=new C.xx(2,"bottomLeft")
A.TN=B.a(x([1,0,3,2]),y.t)
A.TS=B.a(x([1,26,19]),y.t)
A.TR=B.a(x([1,26,16]),y.t)
A.TQ=B.a(x([1,26,13]),y.t)
A.TT=B.a(x([1,26,9]),y.t)
A.TX=B.a(x([1,44,34]),y.t)
A.TW=B.a(x([1,44,28]),y.t)
A.TV=B.a(x([1,44,22]),y.t)
A.TU=B.a(x([1,44,16]),y.t)
A.TZ=B.a(x([1,70,55]),y.t)
A.TY=B.a(x([1,70,44]),y.t)
A.Uf=B.a(x([2,35,17]),y.t)
A.Ue=B.a(x([2,35,13]),y.t)
A.TO=B.a(x([1,100,80]),y.t)
A.Uh=B.a(x([2,50,32]),y.t)
A.Ug=B.a(x([2,50,24]),y.t)
A.Xg=B.a(x([4,25,9]),y.t)
A.TP=B.a(x([1,134,108]),y.t)
A.Ui=B.a(x([2,67,43]),y.t)
A.VP=B.a(x([2,33,15,2,34,16]),y.t)
A.W_=B.a(x([2,33,11,2,34,12]),y.t)
A.Uj=B.a(x([2,86,68]),y.t)
A.Xk=B.a(x([4,43,27]),y.t)
A.Xj=B.a(x([4,43,19]),y.t)
A.Xi=B.a(x([4,43,15]),y.t)
A.Uk=B.a(x([2,98,78]),y.t)
A.Xl=B.a(x([4,49,31]),y.t)
A.Wa=B.a(x([2,32,14,4,33,15]),y.t)
A.Wl=B.a(x([4,39,13,1,40,14]),y.t)
A.Uc=B.a(x([2,121,97]),y.t)
A.Ww=B.a(x([2,60,38,2,61,39]),y.t)
A.WH=B.a(x([4,40,18,2,41,19]),y.t)
A.WS=B.a(x([4,40,14,2,41,15]),y.t)
A.Ud=B.a(x([2,146,116]),y.t)
A.X2=B.a(x([3,58,36,2,59,37]),y.t)
A.V5=B.a(x([4,36,16,4,37,17]),y.t)
A.Vg=B.a(x([4,36,12,4,37,13]),y.t)
A.Vr=B.a(x([2,86,68,2,87,69]),y.t)
A.VC=B.a(x([4,69,43,1,70,44]),y.t)
A.VJ=B.a(x([6,43,19,2,44,20]),y.t)
A.VK=B.a(x([6,43,15,2,44,16]),y.t)
A.Xe=B.a(x([4,101,81]),y.t)
A.VL=B.a(x([1,80,50,4,81,51]),y.t)
A.VM=B.a(x([4,50,22,4,51,23]),y.t)
A.VN=B.a(x([3,36,12,8,37,13]),y.t)
A.VO=B.a(x([2,116,92,2,117,93]),y.t)
A.VQ=B.a(x([6,58,36,2,59,37]),y.t)
A.VR=B.a(x([4,46,20,6,47,21]),y.t)
A.VS=B.a(x([7,42,14,4,43,15]),y.t)
A.Xf=B.a(x([4,133,107]),y.t)
A.VT=B.a(x([8,59,37,1,60,38]),y.t)
A.VU=B.a(x([8,44,20,4,45,21]),y.t)
A.VV=B.a(x([12,33,11,4,34,12]),y.t)
A.VW=B.a(x([3,145,115,1,146,116]),y.t)
A.VX=B.a(x([4,64,40,5,65,41]),y.t)
A.VY=B.a(x([11,36,16,5,37,17]),y.t)
A.VZ=B.a(x([11,36,12,5,37,13]),y.t)
A.W0=B.a(x([5,109,87,1,110,88]),y.t)
A.W1=B.a(x([5,65,41,5,66,42]),y.t)
A.W2=B.a(x([5,54,24,7,55,25]),y.t)
A.TI=B.a(x([11,36,12]),y.t)
A.W3=B.a(x([5,122,98,1,123,99]),y.t)
A.W4=B.a(x([7,73,45,3,74,46]),y.t)
A.W5=B.a(x([15,43,19,2,44,20]),y.t)
A.W6=B.a(x([3,45,15,13,46,16]),y.t)
A.W7=B.a(x([1,135,107,5,136,108]),y.t)
A.W8=B.a(x([10,74,46,1,75,47]),y.t)
A.W9=B.a(x([1,50,22,15,51,23]),y.t)
A.Wb=B.a(x([2,42,14,17,43,15]),y.t)
A.Wc=B.a(x([5,150,120,1,151,121]),y.t)
A.Wd=B.a(x([9,69,43,4,70,44]),y.t)
A.We=B.a(x([17,50,22,1,51,23]),y.t)
A.Wf=B.a(x([2,42,14,19,43,15]),y.t)
A.Wg=B.a(x([3,141,113,4,142,114]),y.t)
A.Wh=B.a(x([3,70,44,11,71,45]),y.t)
A.Wi=B.a(x([17,47,21,4,48,22]),y.t)
A.Wj=B.a(x([9,39,13,16,40,14]),y.t)
A.Wk=B.a(x([3,135,107,5,136,108]),y.t)
A.Wm=B.a(x([3,67,41,13,68,42]),y.t)
A.Wn=B.a(x([15,54,24,5,55,25]),y.t)
A.Wo=B.a(x([15,43,15,10,44,16]),y.t)
A.Wp=B.a(x([4,144,116,4,145,117]),y.t)
A.TK=B.a(x([17,68,42]),y.t)
A.Wq=B.a(x([17,50,22,6,51,23]),y.t)
A.Wr=B.a(x([19,46,16,6,47,17]),y.t)
A.Ws=B.a(x([2,139,111,7,140,112]),y.t)
A.TL=B.a(x([17,74,46]),y.t)
A.Wt=B.a(x([7,54,24,16,55,25]),y.t)
A.Ur=B.a(x([34,37,13]),y.t)
A.Wu=B.a(x([4,151,121,5,152,122]),y.t)
A.Wv=B.a(x([4,75,47,14,76,48]),y.t)
A.Wx=B.a(x([11,54,24,14,55,25]),y.t)
A.Wy=B.a(x([16,45,15,14,46,16]),y.t)
A.Wz=B.a(x([6,147,117,4,148,118]),y.t)
A.WA=B.a(x([6,73,45,14,74,46]),y.t)
A.WB=B.a(x([11,54,24,16,55,25]),y.t)
A.WC=B.a(x([30,46,16,2,47,17]),y.t)
A.WD=B.a(x([8,132,106,4,133,107]),y.t)
A.WE=B.a(x([8,75,47,13,76,48]),y.t)
A.WF=B.a(x([7,54,24,22,55,25]),y.t)
A.WG=B.a(x([22,45,15,13,46,16]),y.t)
A.WI=B.a(x([10,142,114,2,143,115]),y.t)
A.WJ=B.a(x([19,74,46,4,75,47]),y.t)
A.WK=B.a(x([28,50,22,6,51,23]),y.t)
A.WL=B.a(x([33,46,16,4,47,17]),y.t)
A.WM=B.a(x([8,152,122,4,153,123]),y.t)
A.WN=B.a(x([22,73,45,3,74,46]),y.t)
A.WO=B.a(x([8,53,23,26,54,24]),y.t)
A.WP=B.a(x([12,45,15,28,46,16]),y.t)
A.WQ=B.a(x([3,147,117,10,148,118]),y.t)
A.WR=B.a(x([3,73,45,23,74,46]),y.t)
A.WT=B.a(x([4,54,24,31,55,25]),y.t)
A.WU=B.a(x([11,45,15,31,46,16]),y.t)
A.WV=B.a(x([7,146,116,7,147,117]),y.t)
A.WW=B.a(x([21,73,45,7,74,46]),y.t)
A.WX=B.a(x([1,53,23,37,54,24]),y.t)
A.WY=B.a(x([19,45,15,26,46,16]),y.t)
A.WZ=B.a(x([5,145,115,10,146,116]),y.t)
A.X_=B.a(x([19,75,47,10,76,48]),y.t)
A.X0=B.a(x([15,54,24,25,55,25]),y.t)
A.X1=B.a(x([23,45,15,25,46,16]),y.t)
A.X3=B.a(x([13,145,115,3,146,116]),y.t)
A.X4=B.a(x([2,74,46,29,75,47]),y.t)
A.X5=B.a(x([42,54,24,1,55,25]),y.t)
A.X6=B.a(x([23,45,15,28,46,16]),y.t)
A.TJ=B.a(x([17,145,115]),y.t)
A.X7=B.a(x([10,74,46,23,75,47]),y.t)
A.X8=B.a(x([10,54,24,35,55,25]),y.t)
A.X9=B.a(x([19,45,15,35,46,16]),y.t)
A.Xa=B.a(x([17,145,115,1,146,116]),y.t)
A.Xb=B.a(x([14,74,46,21,75,47]),y.t)
A.Xc=B.a(x([29,54,24,19,55,25]),y.t)
A.V6=B.a(x([11,45,15,46,46,16]),y.t)
A.V7=B.a(x([13,145,115,6,146,116]),y.t)
A.V8=B.a(x([14,74,46,23,75,47]),y.t)
A.V9=B.a(x([44,54,24,7,55,25]),y.t)
A.Va=B.a(x([59,46,16,1,47,17]),y.t)
A.Vb=B.a(x([12,151,121,7,152,122]),y.t)
A.Vc=B.a(x([12,75,47,26,76,48]),y.t)
A.Vd=B.a(x([39,54,24,14,55,25]),y.t)
A.Ve=B.a(x([22,45,15,41,46,16]),y.t)
A.Vf=B.a(x([6,151,121,14,152,122]),y.t)
A.Vh=B.a(x([6,75,47,34,76,48]),y.t)
A.Vi=B.a(x([46,54,24,10,55,25]),y.t)
A.Vj=B.a(x([2,45,15,64,46,16]),y.t)
A.Vk=B.a(x([17,152,122,4,153,123]),y.t)
A.Vl=B.a(x([29,74,46,14,75,47]),y.t)
A.Vm=B.a(x([49,54,24,10,55,25]),y.t)
A.Vn=B.a(x([24,45,15,46,46,16]),y.t)
A.Vo=B.a(x([4,152,122,18,153,123]),y.t)
A.Vp=B.a(x([13,74,46,32,75,47]),y.t)
A.Vq=B.a(x([48,54,24,14,55,25]),y.t)
A.Vs=B.a(x([42,45,15,32,46,16]),y.t)
A.Vt=B.a(x([20,147,117,4,148,118]),y.t)
A.Vu=B.a(x([40,75,47,7,76,48]),y.t)
A.Vv=B.a(x([43,54,24,22,55,25]),y.t)
A.Vw=B.a(x([10,45,15,67,46,16]),y.t)
A.Vx=B.a(x([19,148,118,6,149,119]),y.t)
A.Vy=B.a(x([18,75,47,31,76,48]),y.t)
A.Vz=B.a(x([34,54,24,34,55,25]),y.t)
A.VA=B.a(x([20,45,15,61,46,16]),y.t)
A.iV=B.a(x([A.TS,A.TR,A.TQ,A.TT,A.TX,A.TW,A.TV,A.TU,A.TZ,A.TY,A.Uf,A.Ue,A.TO,A.Uh,A.Ug,A.Xg,A.TP,A.Ui,A.VP,A.W_,A.Uj,A.Xk,A.Xj,A.Xi,A.Uk,A.Xl,A.Wa,A.Wl,A.Uc,A.Ww,A.WH,A.WS,A.Ud,A.X2,A.V5,A.Vg,A.Vr,A.VC,A.VJ,A.VK,A.Xe,A.VL,A.VM,A.VN,A.VO,A.VQ,A.VR,A.VS,A.Xf,A.VT,A.VU,A.VV,A.VW,A.VX,A.VY,A.VZ,A.W0,A.W1,A.W2,A.TI,A.W3,A.W4,A.W5,A.W6,A.W7,A.W8,A.W9,A.Wb,A.Wc,A.Wd,A.We,A.Wf,A.Wg,A.Wh,A.Wi,A.Wj,A.Wk,A.Wm,A.Wn,A.Wo,A.Wp,A.TK,A.Wq,A.Wr,A.Ws,A.TL,A.Wt,A.Ur,A.Wu,A.Wv,A.Wx,A.Wy,A.Wz,A.WA,A.WB,A.WC,A.WD,A.WE,A.WF,A.WG,A.WI,A.WJ,A.WK,A.WL,A.WM,A.WN,A.WO,A.WP,A.WQ,A.WR,A.WT,A.WU,A.WV,A.WW,A.WX,A.WY,A.WZ,A.X_,A.X0,A.X1,A.X3,A.X4,A.X5,A.X6,A.TJ,A.X7,A.X8,A.X9,A.Xa,A.Xb,A.Xc,A.V6,A.V7,A.V8,A.V9,A.Va,A.Vb,A.Vc,A.Vd,A.Ve,A.Vf,A.Vh,A.Vi,A.Vj,A.Vk,A.Vl,A.Vm,A.Vn,A.Vo,A.Vp,A.Vq,A.Vs,A.Vt,A.Vu,A.Vv,A.Vw,A.Vx,A.Vy,A.Vz,A.VA]),y.S)
A.XH=B.a(x([6,18]),y.t)
A.XI=B.a(x([6,22]),y.t)
A.XL=B.a(x([6,26]),y.t)
A.XR=B.a(x([6,30]),y.t)
A.XX=B.a(x([6,34]),y.t)
A.XJ=B.a(x([6,22,38]),y.t)
A.XK=B.a(x([6,24,42]),y.t)
A.XM=B.a(x([6,26,46]),y.t)
A.XQ=B.a(x([6,28,50]),y.t)
A.XS=B.a(x([6,30,54]),y.t)
A.XW=B.a(x([6,32,58]),y.t)
A.XY=B.a(x([6,34,62]),y.t)
A.XN=B.a(x([6,26,46,66]),y.t)
A.XO=B.a(x([6,26,48,70]),y.t)
A.XP=B.a(x([6,26,50,74]),y.t)
A.XT=B.a(x([6,30,54,78]),y.t)
A.XU=B.a(x([6,30,56,82]),y.t)
A.XV=B.a(x([6,30,58,86]),y.t)
A.XZ=B.a(x([6,34,62,90]),y.t)
A.YG=B.a(x([6,28,50,72,94]),y.t)
A.YH=B.a(x([6,26,50,74,98]),y.t)
A.YI=B.a(x([6,30,54,78,102]),y.t)
A.YJ=B.a(x([6,28,54,80,106]),y.t)
A.YK=B.a(x([6,32,58,84,110]),y.t)
A.YL=B.a(x([6,30,58,86,114]),y.t)
A.YM=B.a(x([6,34,62,90,118]),y.t)
A.VB=B.a(x([6,26,50,74,98,122]),y.t)
A.VD=B.a(x([6,30,54,78,102,126]),y.t)
A.VE=B.a(x([6,26,52,78,104,130]),y.t)
A.VF=B.a(x([6,30,56,82,108,134]),y.t)
A.VG=B.a(x([6,34,60,86,112,138]),y.t)
A.VH=B.a(x([6,30,58,86,114,142]),y.t)
A.VI=B.a(x([6,34,62,90,118,146]),y.t)
A.a_f=B.a(x([6,30,54,78,102,126,150]),y.t)
A.a_g=B.a(x([6,24,50,76,102,128,154]),y.t)
A.a_h=B.a(x([6,28,54,80,106,132,158]),y.t)
A.a_i=B.a(x([6,32,58,84,110,136,162]),y.t)
A.a_j=B.a(x([6,26,54,82,110,138,166]),y.t)
A.a_k=B.a(x([6,30,58,86,114,142,170]),y.t)
A.a3b=B.a(x([D.fA,A.XH,A.XI,A.XL,A.XR,A.XX,A.XJ,A.XK,A.XM,A.XQ,A.XS,A.XW,A.XY,A.XN,A.XO,A.XP,A.XT,A.XU,A.XV,A.XZ,A.YG,A.YH,A.YI,A.YJ,A.YK,A.YL,A.YM,A.VB,A.VD,A.VE,A.VF,A.VG,A.VH,A.VI,A.a_f,A.a_g,A.a_h,A.a_i,A.a_j,A.a_k]),y.S)
A.a3E=B.a(x([A.m5,A.r9,A.m6]),B.a1("p<xx>"))
A.Iw=new C.v5(0,"finderPatternOuter")
A.Ix=new C.v5(1,"finderPatternInner")
A.Iy=new C.v5(2,"finderPatternDot")
A.jK=new C.v5(3,"codePixel")
A.ajd=new C.v5(4,"codePixelEmpty")
A.nO=new C.HK(0,"valid")
A.ajg=new C.HK(1,"contentTooLong")
A.ajh=new C.HK(2,"error")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bvu","aSO",()=>C.bkB())
x($,"buF","aXg",()=>C.bkA())})()}
$__dart_deferred_initializers__["s+l2C3q2dvrlSx0d5TDZLkjQNLc="] = $__dart_deferred_initializers__.current
