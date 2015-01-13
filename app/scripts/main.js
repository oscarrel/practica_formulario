$('#registro').validate({
    onkeyup: false,
    onfocusout: false,
    onclick: false,
    rules: {
    	dpes_02: "required",
      dpes_03: "required",
      dpes_05: "required",
      dpes_06: "required",
      fnac_01: "required",
      fnac_02: "required",
      fnac_03: "required",
      dpes_10: "required",
      email: "required",
      emailConf: "required",
      dcia_02: "required",
      dcia_0511: "required",
      addr_010: "required",
      addr_020: "required",
      addr_041: "required",
      addr_051: "required",
      addr_0610: "required"

      }
});
