self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={pv:function pv(d,e){this.a=d
this.b=e},
aYf(d,e,f,g,h,i,j,k){var x,w,v=null
if(g==null)x=v
else x=g
if(j!=null){w=e==null?v:e.E9(j,v)
if(w==null)w=B.hh(j,v)}else w=e
return new A.rZ(d,x,i,w,k,f,h,v,v)},
ta:function ta(d,e){this.a=d
this.b=e},
pT:function pT(d,e){this.a=d
this.b=e},
uy:function uy(d,e){this.a=d
this.b=e},
rZ:function rZ(d,e,f,g,h,i,j,k,l){var _=this
_.r=d
_.y=e
_.z=f
_.Q=g
_.at=h
_.c=i
_.d=j
_.e=k
_.a=l},
a5j:function a5j(d,e,f){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.fK$=d
_.cn$=e
_.a=null
_.b=f
_.c=null},
aFe:function aFe(){},
aFf:function aFf(){},
aFg:function aFg(){},
aFh:function aFh(){},
aFi:function aFi(){},
aFj:function aFj(){},
aFk:function aFk(){},
aFl:function aFl(){},
b0C(){var x=new Float64Array(4)
x[3]=1
return new A.qM(x)},
qM:function qM(d){this.a=d}},B,C
A=a.updateHolder(c[11],A)
B=c[0]
C=c[2]
A.pv.prototype={
ex(d){return B.rY(this.a,this.b,d)}}
A.ta.prototype={
ex(d){var x=B.pC(this.a,this.b,d)
x.toString
return x}}
A.pT.prototype={
ex(d){var x=B.f_(this.a,this.b,d)
x.toString
return x}}
A.uy.prototype={
ex(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eO(new Float64Array(3)),a3=new B.eO(new Float64Array(3)),a4=A.b0C(),a5=A.b0C(),a6=new B.eO(new Float64Array(3)),a7=new B.eO(new Float64Array(3))
this.a.Zs(a2,a4,a6)
this.b.Zs(a3,a5,a7)
x=1-a8
w=a2.n_(x).a0(0,a3.n_(a8))
v=a4.n_(x).a0(0,a5.n_(a8))
u=new Float64Array(4)
t=new A.qM(u)
t.bF(v)
t.xZ(0)
s=a6.n_(x).a0(0,a7.n_(a8))
x=new Float64Array(16)
v=new B.by(x)
r=u[0]
q=u[1]
p=u[2]
o=u[3]
n=r+r
m=q+q
l=p+p
k=r*n
j=r*m
i=r*l
h=q*m
g=q*l
f=p*l
e=o*n
d=o*m
a0=o*l
a1=w.a
x[0]=1-(h+f)
x[1]=j+a0
x[2]=i-d
x[3]=0
x[4]=j-a0
x[5]=1-(k+f)
x[6]=g+e
x[7]=0
x[8]=i+d
x[9]=g-e
x[10]=1-(k+h)
x[11]=0
x[12]=a1[0]
x[13]=a1[1]
x[14]=a1[2]
x[15]=1
v.bB(0,s)
return v}}
A.rZ.prototype={
an(){return new A.a5j(null,null,C.m)}}
A.a5j.prototype={
q1(d){var x,w,v=this,u=null,t=v.CW
v.a.toString
x=y.b
v.CW=x.a(d.$3(t,u,new A.aFe()))
t=v.cx
v.a.toString
w=y.f
v.cx=w.a(d.$3(t,u,new A.aFf()))
t=y.d
v.cy=t.a(d.$3(v.cy,v.a.y,new A.aFg()))
v.db=t.a(d.$3(v.db,v.a.z,new A.aFh()))
v.dx=y.e.a(d.$3(v.dx,v.a.Q,new A.aFi()))
t=v.dy
v.a.toString
v.dy=w.a(d.$3(t,u,new A.aFj()))
v.fr=y.w.a(d.$3(v.fr,v.a.at,new A.aFk()))
t=v.fx
v.a.toString
v.fx=x.a(d.$3(t,u,new A.aFl()))},
v(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.gfn(),n=q.CW
n=n==null?p:n.ah(0,o.gn(o))
x=q.cx
x=x==null?p:x.ah(0,o.gn(o))
w=q.cy
w=w==null?p:w.ah(0,o.gn(o))
v=q.db
v=v==null?p:v.ah(0,o.gn(o))
u=q.dx
u=u==null?p:u.ah(0,o.gn(o))
t=q.dy
t=t==null?p:t.ah(0,o.gn(o))
s=q.fr
s=s==null?p:s.ah(0,o.gn(o))
r=q.fx
r=r==null?p:r.ah(0,o.gn(o))
return B.aM(n,q.a.r,C.k,p,u,w,v,p,p,t,x,s,r,p)}}
A.qM.prototype={
bF(d){var x=d.a,w=this.a
w[0]=x[0]
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
a5o(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
r[3]=x*0.5
x=0.5/x
r[0]=(s[5]-s[7])*x
r[1]=(s[6]-s[2])*x
r[2]=(s[1]-s[3])*x}else{if(r<q)w=q<p?2:1
else w=r<p?2:0
v=(w+1)%3
u=(w+2)%3
r=w*3
q=v*3
p=u*3
x=Math.sqrt(s[r+w]-s[q+v]-s[p+u]+1)
t=this.a
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
xZ(d){var x,w,v=Math.sqrt(this.gqe())
if(v===0)return 0
x=1/v
w=this.a
w[0]=w[0]*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return v},
gqe(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gp(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
n_(d){var x=new Float64Array(4),w=new A.qM(x)
w.bF(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
ak(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gaCc(),a1=a0.i(0,3),a2=a0.i(0,2),a3=a0.i(0,1),a4=a0.i(0,0)
h=C.d.ak(g,a4)
x=C.d.ak(d,a1)
w=C.d.ak(e,a2)
v=C.d.ak(f,a3)
u=C.d.ak(g,a3)
t=C.d.ak(e,a1)
s=C.d.ak(f,a4)
r=C.d.ak(d,a2)
q=C.d.ak(g,a2)
p=C.d.ak(f,a1)
o=C.d.ak(d,a3)
n=C.d.ak(e,a4)
m=C.d.ak(g,a1)
l=C.d.ak(d,a4)
k=C.d.ak(e,a3)
j=C.d.ak(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.qM(i)},
a0(d,e){var x,w=new Float64Array(4),v=new A.qM(w)
v.bF(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
a9(d,e){var x,w=new Float64Array(4),v=new A.qM(w)
v.bF(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
i(d,e){return this.a[e]},
l(d,e,f){this.a[e]=f},
j(d){var x=this.a
return B.f(x[0])+", "+B.f(x[1])+", "+B.f(x[2])+" @ "+B.f(x[3])}}
var z=a.updateTypes(["pv(@)","pT(@)","ta(@)","uy(@)"])
A.aFe.prototype={
$1(d){return new A.pv(y.k.a(d),null)},
$S:z+0}
A.aFf.prototype={
$1(d){return new A.pT(y.m.a(d),null)},
$S:z+1}
A.aFg.prototype={
$1(d){return new B.kU(y.r.a(d),null)},
$S:262}
A.aFh.prototype={
$1(d){return new B.kU(y.r.a(d),null)},
$S:262}
A.aFi.prototype={
$1(d){return new A.ta(y.a.a(d),null)},
$S:z+2}
A.aFj.prototype={
$1(d){return new A.pT(y.m.a(d),null)},
$S:z+1}
A.aFk.prototype={
$1(d){return new A.uy(y.E.a(d),null)},
$S:z+3}
A.aFl.prototype={
$1(d){return new A.pv(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.aR,[A.pv,A.ta,A.pT,A.uy])
w(A.rZ,B.Fh)
w(A.a5j,B.t_)
x(B.ix,[A.aFe,A.aFf,A.aFg,A.aFh,A.aFi,A.aFj,A.aFk,A.aFl])
w(A.qM,B.t)})()
B.nf(b.typeUniverse,JSON.parse('{"pv":{"aR":["fT?"],"aI":["fT?"],"aR.T":"fT?","aI.T":"fT?"},"ta":{"aR":["ai"],"aI":["ai"],"aR.T":"ai","aI.T":"ai"},"pT":{"aR":["dd"],"aI":["dd"],"aR.T":"dd","aI.T":"dd"},"uy":{"aR":["by"],"aI":["by"],"aR.T":"by","aI.T":"by"},"rZ":{"Y":[],"c":[]},"a5j":{"ad":["rZ"]}}'))
var y=(function rtii(){var x=B.a1
return{k:x("fT"),a:x("ai"),r:x("fY"),m:x("dd"),E:x("by"),b:x("pv?"),e:x("ta?"),d:x("kU?"),f:x("pT?"),w:x("uy?")}})()}
$__dart_deferred_initializers__["u27Vu8PzauhxzeiQKOpmAec7GqA="] = $__dart_deferred_initializers__.current
