import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Nerve extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Nerve({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4502 8.12324C25.677 8.6268 25.4527 9.21889 24.9491 9.44571C23.2134 10.2275 22.0068 11.9686 22 13.9902L22.0001 14.0073L22 14.0245C22.0093 16.7781 24.2443 19.0074 27 19.0074C29.5791 19.0074 31.7032 17.0539 31.9714 14.5465C32.0301 13.9973 32.5229 13.5998 33.072 13.6585C33.6212 13.7173 34.0188 14.2101 33.96 14.7592C33.8018 16.2386 33.1831 17.5801 32.25 18.6375C33.7512 18.9749 35.0701 19.7946 36.034 20.9234C36.3927 21.3434 36.343 21.9746 35.923 22.3333C35.503 22.6919 34.8718 22.6422 34.5131 22.2222C33.5945 21.1465 32.2316 20.4672 30.709 20.4672C27.9476 20.4672 25.709 22.7057 25.709 25.4672C25.709 26.2966 25.9102 27.0771 26.2666 27.7645C27.0445 27.6611 27.8577 27.9389 28.4098 28.5765C28.6637 28.8697 28.893 29.1693 29.1007 29.4727C29.4392 29.967 29.5684 30.5418 29.5087 31.0933C29.9638 31.376 30.3281 31.8115 30.5158 32.3585C30.7394 33.0103 30.9082 33.6408 31.0489 34.1909C31.1582 34.6181 31.1458 35.0475 31.0341 35.4426C31.2958 35.6727 31.5118 35.9634 31.6581 36.3056C31.7597 36.5433 31.8298 36.6276 31.8478 36.6464C31.9154 36.6945 31.9798 36.7454 32.0409 36.799C32.2278 36.7257 32.4268 36.6747 32.6352 36.6497C32.8138 36.6283 33.0212 36.5936 33.2609 36.5414C34.0927 36.3604 34.9176 36.6321 35.4788 37.1915C35.9078 36.9333 36.2227 36.5495 36.3795 36.0756C36.5785 35.4742 36.5611 34.6047 35.9873 33.4919C35.7342 33.001 35.927 32.3979 36.4178 32.1448C36.9087 31.8917 37.5118 32.0844 37.7649 32.5753C38.1723 33.3653 38.4058 34.1406 38.4738 34.8769C39.0831 34.1531 39.7263 33.1747 40.252 31.8849C40.4604 31.3734 41.044 31.1278 41.5554 31.3362C42.0669 31.5447 42.3125 32.1283 42.1041 32.6397C41.4782 34.1753 40.701 35.3492 39.9518 36.2265C40.439 36.2843 40.9512 36.4044 41.5058 36.5968C42.0276 36.7779 42.3038 37.3476 42.1228 37.8694C41.9417 38.3912 41.372 38.6674 40.8502 38.4863C39.8559 38.1413 39.1483 38.1279 38.4594 38.2706C37.8176 38.4036 37.1863 38.6675 36.3053 39.0359L36.1792 39.0886C36.0979 40.1217 35.3518 41.0235 34.287 41.2553C33.9181 41.3356 33.5592 41.3977 33.2101 41.4396C32.5014 41.5247 31.8284 41.2936 31.3315 40.8575C30.6014 41.1435 29.7464 41.0684 29.058 40.5822C28.1043 39.9086 27.5626 38.9984 27.2221 38.2017C26.9965 37.6739 26.9737 37.1111 27.1183 36.5995C26.7662 36.2903 26.5001 35.8753 26.3751 35.3863C26.2425 34.8679 26.1118 34.3882 25.9526 33.924C25.834 33.5782 25.7986 33.2242 25.8354 32.8836C25.5603 32.7126 25.3151 32.483 25.1202 32.1983C25.011 32.0389 24.8925 31.8843 24.7629 31.7346C24.07 30.9344 23.9967 29.8083 24.5011 28.9418C23.5982 28.0561 22.3628 27.5116 21 27.5116C19.4005 27.5116 17.9763 28.2627 17.0611 29.4315C16.993 29.5303 16.9225 29.6274 16.8495 29.7225C16.3131 30.5193 16 31.4789 16 32.5116C16 33.4647 16.2657 34.3527 16.7266 35.109C17.014 35.5806 16.8646 36.1959 16.393 36.4833C15.9214 36.7707 15.3061 36.6213 15.0187 36.1497C14.3722 35.0888 14 33.8421 14 32.5116C14 32.31 14.0085 32.1104 14.0252 31.9131C13.1852 32.2698 12.2612 32.4672 11.2911 32.4672C10.8055 32.4672 10.3305 32.4176 9.8712 32.3229C9.33029 32.2114 8.98221 31.6824 9.09374 31.1415C9.20526 30.6006 9.73416 30.2526 10.2751 30.3641C10.6023 30.4315 10.942 30.4672 11.2911 30.4672C12.8906 30.4672 14.3147 29.7161 15.23 28.5473C15.298 28.4484 15.3686 28.3513 15.4416 28.2561C15.978 27.4594 16.2911 26.4999 16.2911 25.4672C16.2911 22.7057 14.0525 20.4672 11.2911 20.4672C9.8229 20.4672 8.50363 21.0987 7.58751 22.108C7.21632 22.5169 6.5839 22.5475 6.17495 22.1763C5.76601 21.8051 5.7354 21.1727 6.10659 20.7638C7.05637 19.7174 8.32063 18.9588 9.75012 18.6375C8.84544 17.6123 8.23628 16.32 8.05577 14.8939C7.98642 14.346 8.37438 13.8456 8.92229 13.7762C9.4702 13.7069 9.97059 14.0948 10.0399 14.6428C10.3514 17.1037 12.4542 19.0073 15.0001 19.0073C17.7557 19.0073 19.9907 16.7781 20 14.0247L20 14.0074L20 13.99C19.9933 12.0017 18.826 10.2847 17.1357 9.48483C16.6365 9.24859 16.4233 8.65239 16.6596 8.15318C16.8958 7.65398 17.492 7.4408 17.9912 7.67704C19.2418 8.26882 20.2896 9.22097 21 10.3999C21.7328 9.18387 22.8247 8.20911 24.1277 7.62216C24.6313 7.39534 25.2234 7.61969 25.4502 8.12324ZM18.2658 26.0657C19.1058 25.709 20.0299 25.5116 21 25.5116C21.9702 25.5116 22.8944 25.7092 23.7343 26.066C23.7175 25.8685 23.709 25.6688 23.709 25.4672C23.709 23.692 24.3698 22.0711 25.4588 20.8372C23.5701 20.4128 21.9702 19.2251 21 17.615C20.0298 19.2251 18.4299 20.4128 16.5412 20.8371C17.6302 22.0711 18.2911 23.692 18.2911 25.4672C18.2911 25.6688 18.2825 25.8684 18.2658 26.0657ZM21 22.0116C20.7243 22.0116 20.5007 22.2351 20.5007 22.5109C20.5007 22.7866 20.7243 23.0102 21 23.0102C21.2758 23.0102 21.4993 22.7866 21.4993 22.5109C21.4993 22.2351 21.2758 22.0116 21 22.0116ZM18.5007 22.5109C18.5007 21.1306 19.6197 20.0116 21 20.0116C22.3803 20.0116 23.4993 21.1306 23.4993 22.5109C23.4993 23.8912 22.3803 25.0102 21 25.0102C19.6197 25.0102 18.5007 23.8912 18.5007 22.5109ZM27.9155 32.8796L28.0352 32.7329L28.2257 32.7288C28.4012 32.7251 28.5649 32.8351 28.624 33.0075C28.821 33.5816 28.974 34.1497 29.1113 34.6865C29.1509 34.8413 29.0977 34.9997 28.9818 35.1006L28.8404 35.2235L28.6545 35.1971C28.4922 35.174 28.3549 35.0558 28.3127 34.8907C28.1768 34.3593 28.0303 33.8171 27.8443 33.275C27.7967 33.1362 27.8265 32.9887 27.9155 32.8796ZM29.4969 36.8452L29.3117 36.8188L29.1694 36.9423C29.0371 37.0572 28.9895 37.2482 29.0611 37.4156C29.3206 38.0228 29.6713 38.5668 30.2119 38.9487C30.3938 39.0771 30.6443 39.0375 30.7776 38.8617L30.9063 38.6919L30.8429 38.4885C30.8169 38.405 30.7653 38.3304 30.6875 38.2754C30.3173 38.0139 30.0453 37.621 29.8191 37.0916C29.7608 36.9553 29.6378 36.8653 29.4969 36.8452ZM32.5942 38.7956L32.4659 38.9648L32.5293 39.1687C32.5871 39.3543 32.7723 39.4778 32.9717 39.4539C33.2502 39.4205 33.5463 39.3697 33.8616 39.3011C34.084 39.2527 34.2251 39.0331 34.1767 38.8107C34.1282 38.5883 33.9087 38.4473 33.6863 38.4957C33.393 38.5595 33.1228 38.6056 32.8735 38.6355C32.7579 38.6494 32.6605 38.7084 32.5942 38.7956ZM27.1202 31.2477L27.3094 31.2438L27.4302 31.0961C27.5435 30.9575 27.5555 30.756 27.4505 30.6026C27.2837 30.359 27.1003 30.1195 26.8979 29.8858C26.7489 29.7137 26.4886 29.695 26.3166 29.844C26.1445 29.993 26.1258 30.2533 26.2748 30.4254C26.4559 30.6346 26.6204 30.8493 26.7704 31.0683C26.8514 31.1866 26.9828 31.2505 27.1202 31.2477ZM31.8517 36.6502C31.8517 36.6502 31.8521 36.6506 31.8517 36.6502C31.8517 36.6501 31.8513 36.6495 31.849 36.6476C31.8502 36.6489 31.8511 36.6497 31.8517 36.6502Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}