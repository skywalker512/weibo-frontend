export default function compile(template, ...agrs) {
    const evalExpr = /{%=(.+?)%}/g;
    const expr = /{%([\s\S]+?)%}/g;

    template = template
        .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
        .replace(expr, '`); \n $1 \n  echo(`');

    template = 'echo(`' + template + '`);';

    const script =
        `(function parse(data){
      let output = "";
  
      function echo(html){
        output += html;
      }
  
      ${ template }
  
      return output;
    })`;
    const parse = eval(script);
    const str = parse(agrs); 
    let elt = document.createElement('span'); 
    elt.textContent = str; // textContent 自动转义
    return elt.innerHTML;
}
